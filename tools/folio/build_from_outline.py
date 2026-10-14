#!/usr/bin/env python3
"""Seed the working document folio from the TWG manuscript outline.

Usage:
    python3 -I tools/folio/build_from_outline.py <outline.md> [--force]

Reads library/twg-outline-2026-10-02/HWF_Registry_DTH_Outline.md and writes
folio/dth-hrh/: the document manifest, one directory per chapter, and one
block (a .ts manifest and a .md body) per piece of the outline. The glossary
chapter is written by tools/glossary/build_glossary.py, not here.

This is a ONE-TIME SEED. After it, the folio is the working document and is
edited by hand. The script refuses to overwrite a chapter directory that
exists unless --force is given, and --force discards hand edits.

What it writes besides prose:
  - L1 structured assets, using smart-base's DAK block kinds:
      persona (pers:)                  5.1, the people and systems listed
      user-scenario (scen:)            5.2 priority use cases, 20.x illustrative use cases
      functional-requirement (freq:)   7.1-7.5, one per outline bullet
      non-functional-requirement (nfreq:)  7, from its key messages
      data-element (de:)               11.1, the WHO 2015 minimum data set
  - remark blocks (rem:) for the TWG's points for discussion, so that each
    can be commented on and decided separately;
  - the DIIG phase figure (DIIG Fig. 1.1.1), reused from the smart-base
    library, in section 3.1.
"""

import json
import re
import shutil
import sys
from pathlib import Path

DOC = "dth-hrh"
FOLIO = Path("folio") / DOC
OUTLINE_REF = "library/twg-outline-2026-10-02/HWF_Registry_DTH_Outline.md"
DIIG_SVG = Path("smart-base/library/9789240010567-eng/figures/vfig-p017.svg")
TITLE = "Digital Transformation Handbook: Planning for Human Resources for Health and Health Worker Registries"


# ── Parsing ──────────────────────────────────────────────────────

def unescape(s):
    s = re.sub(r"\\([.\[\]()*_#-])", r"\1", s)
    return s.replace("\u00a0", " ").rstrip()


def strip_bold(s):
    return re.sub(r"^\*\*(.*?)\*\*$", r"\1", s.strip()).strip()


def slug(s, n=48):
    s = re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-")
    return s[:n].rstrip("-")


def parse(md):
    """Return (front, parts). front: about/glance/annexes/references raw lines."""
    lines = [unescape(l) for l in md.splitlines()]
    tops = []  # (title, [lines])
    for l in lines:
        m = re.match(r"^# (.+)$", l)
        if m:
            tops.append([strip_bold(m.group(1)), []])
        elif tops:
            tops[-1][1].append(l)
    return tops


def bullets(lines):
    out = []
    for l in lines:
        m = re.match(r"^\s*\*\s+(.*)$", l)
        if m:
            out.append(m.group(1).strip())
    return out


def split_labelled(lines):
    """Split a chapter body into {label: lines} on bold-only paragraphs and ### headings."""
    blocks, cur, order = {}, "_", ["_"]
    blocks["_"] = []
    for l in lines:
        s = l.strip()
        m3 = re.match(r"^### (.+)$", s)
        mb = re.match(r"^\*\*([^*]+)\*\*$", s)
        if m3:
            cur = "§" + strip_bold(m3.group(1))
        elif mb:
            cur = mb.group(1).strip()
        else:
            blocks.setdefault(cur, []).append(l)
            continue
        blocks.setdefault(cur, [])
        order.append(cur)
    return blocks, order


def parse_chapters(body):
    """A Part's body -> (purpose, [(num, title, lines)])."""
    purpose, chapters, cur = "", [], None
    for l in body:
        m = re.match(r"^## (.+)$", l)
        if m:
            t = strip_bold(m.group(1))
            mm = re.match(r"Chapter (\d+)\.\s*(.+)$", t)
            cur = [int(mm.group(1)), mm.group(2).strip(), []]
            chapters.append(cur)
        elif cur:
            cur[2].append(l)
        else:
            mp = re.match(r"^\*\*Purpose:\*\*\s*(.*)$", l.strip())
            if mp:
                purpose = mp.group(1).strip()
    return purpose, chapters


# ── Writing blocks ───────────────────────────────────────────────

class Chapter:
    def __init__(self, dirname, title, label, number=None, tab=None, meta=None):
        self.dir = FOLIO / dirname
        self.dirname = dirname
        self.title, self.label, self.number, self.tab, self.meta = title, label, number, tab, meta
        self.sections = []  # (title, label, blocks, lead)
        self.imports = set()
        self.dak_imports = set()

    def block(self, bid, builder, fields, body, dak=False):
        (self.imports if not dak else self.dak_imports).add(builder)
        self.dir.mkdir(parents=True, exist_ok=True)
        src = "../../schema/dak" if dak else "../../schema/builders"
        lines = [f'import {{ {builder} }} from "{src}";', "", f"export default {builder}({{"]
        for k, v in fields.items():
            lines.append(f"  {k}: {json.dumps(v, ensure_ascii=False)},")
        lines.append("});")
        (self.dir / f"{bid}.ts").write_text("\n".join(lines) + "\n")
        if body is not None:
            (self.dir / f"{bid}.md").write_text(body.rstrip() + "\n")
        return bid

    def prose(self, bid, label, title, body):
        # No block title: the section heading above already says it.
        return self.block(bid, "prose", {"label": label, "uses": [], "meta": src_meta(title=title)}, body)

    def remark(self, bid, label, title, body):
        return self.block(bid, "remark", {"label": label, "title": title, "uses": [], "meta": src_meta()}, body)

    def section(self, title, label, blocks, lead=False):
        self.sections.append((title, label, blocks, lead))

    def write(self):
        self.dir.mkdir(parents=True, exist_ok=True)
        out = ['import { chapter, section } from "../../schema/builders";', "", "export default chapter({"]
        if self.number is not None:
            out.append(f"  number: {self.number},")
        if self.tab:
            out.append(f"  tabLabel: {json.dumps(self.tab)},")
        out += [f"  title: {json.dumps(self.title, ensure_ascii=False)},", f'  label: "{self.label}",']
        if self.meta:
            out.append(f"  meta: {json.dumps(self.meta, ensure_ascii=False)},")
        out.append("  sections: [")
        for t, l, b, lead in self.sections:
            out.append("    section({")
            out.append(f"      title: {json.dumps(t, ensure_ascii=False)},")
            out.append(f'      label: "{l}",')
            if lead:
                out.append("      lead: true,")
            out.append(f"      blocks: [{', '.join(json.dumps(x) for x in b)}],")
            out.append("    }),")
        out += ["  ],", "});"]
        (self.dir / f"{self.dirname}.ts").write_text("\n".join(out) + "\n")


def src_meta(**extra):
    m = {"source": {"library": "twg-outline-2026-10-02", "file": OUTLINE_REF, "method": "outline-seed"}}
    m.update(extra)
    return m


def md_list(items):
    return "\n".join(f"- {i}" for i in items)


# ── L1 structured assets ─────────────────────────────────────────

PERSONAS = [
    # id, name, kind, description, smart-base generic persona it specialises (if any)
    ("health-worker", "Health worker", "person", "A person whose job is to protect and improve the health of their community: holds a registration, licence and employment record in the registry, and needs portable, verifiable credentials and simple renewals.", "HealthcareProvider; CommunityHealthWorker"),
    ("registration-officer", "Registration officer (regulatory body)", "person", "Staff of a professional council or regulatory body who registers and licenses practitioners, records status changes and answers verification requests.", None),
    ("employer-hr-manager", "Employer or facility human resources manager", "person", "Recruits, deploys and manages health workers for a public or private employer or facility; verifies credentials and records changes of employment and place of practice.", "HealthSystemManager"),
    ("training-institution-registrar", "Training institution registrar", "person", "Records enrolment and graduation in a pre-service education institution and confirms qualifications to the regulator.", None),
    ("workforce-planner", "Workforce planner", "person", "Uses stock, distribution, skill mix, attrition and migration data for planning and NHWA reporting.", "HealthSystemManager; DataManager"),
    ("member-of-public", "Member of the public", "person", "Checks that a practitioner is qualified and authorized to practise.", "Person"),
    ("emergency-coordinator", "Emergency coordinator", "person", "Identifies, verifies and deploys qualified health workers, emergency medical teams and volunteers during an emergency.", None),
    ("system-hris", "Human resources information system (HRIS)", "system", "Manages employment transactions, payroll processing, leave and scheduling; supplies employment data to the registry and uses its identities.", None),
    ("system-payroll", "Payroll system", "system", "Pays health workers; reconciled against the registry to remove duplicate and ghost records.", None),
    ("system-emr", "Electronic medical record", "system", "Identifies and authorizes health workers at the point of care, for example a prescriber, by querying the registry.", "System.EMR"),
    ("system-facility-registry", "Facility registry", "system", "The authoritative list of health facilities; the registry links each place of practice to it.", None),
    ("system-national-id", "National identity system", "system", "Foundational identity; the registry may link each health worker to a national identity number where available and lawful.", "System.ClientRegistry"),
    ("system-nhwa-platform", "NHWA platform", "system", "The National Health Workforce Accounts data platform; receives indicator data derived from the registry.", "System.HMIS"),
]

PRIORITY_USE_CASES = [
    ("register-and-license-new-graduate", "Register and license a new graduate",
     ["health-worker", "training-institution-registrar", "registration-officer"],
     "A new graduate applies for registration; the qualification is verified with the training institution; the regulator registers and licenses the graduate; the registry record is created with a unique health worker identifier."),
    ("renew-licence", "Renew a licence",
     ["health-worker", "registration-officer"],
     "A health worker renews a time-limited licence, with continuing professional development recorded; the registry updates licence status and validity."),
    ("update-employment", "Update employment or place of practice",
     ["health-worker", "employer-hr-manager", "system-hris", "system-facility-registry"],
     "An employer or the health worker records a change of employment or place of practice, linked to the facility registry."),
    ("verify-status", "Verify a health worker's status",
     ["employer-hr-manager", "member-of-public", "system-emr", "registration-officer"],
     "An employer, a patient, another system or another country checks a health worker's registration and licence status."),
    ("workforce-counts-and-nhwa-reporting", "Produce workforce counts and distribution for planning and NHWA reporting",
     ["workforce-planner", "system-nhwa-platform"],
     "Workforce counts and distribution are produced from the registry for national planning and for reporting to the National Health Workforce Accounts."),
]

ILLUSTRATIVE_PERSONAS = {
    "Licensing": ["health-worker", "training-institution-registrar", "registration-officer", "employer-hr-manager"],
    "Verification": ["employer-hr-manager", "member-of-public", "system-emr", "health-worker"],
    "Emergency response": ["emergency-coordinator", "health-worker", "registration-officer"],
    "Mobility": ["health-worker", "registration-officer", "workforce-planner"],
}

MDS_2015 = [
    ("identification-number", "Identification number"),
    ("name", "Name"),
    ("birth-history", "Birth history"),
    ("citizenship-and-language", "Citizenship and language"),
    ("address", "Address"),
    ("contact-information", "Contact information"),
    ("professional-licence-and-certification", "Professional licence and certification"),
    ("employment-status", "Employment status"),
    ("employment-address", "Employment address"),
    ("data-submission-institution", "Data submission institution"),
]

FR_PREFIX = {
    "7.1": "ID", "7.2": "REC", "7.3": "LC", "7.4": "VER", "7.5": "AN",
}

NFR = [
    ("security", "Security", "Health workers' personal data are protected in storage and in transit, with role-based access for people and authenticated access for systems (see Chapter 12)."),
    ("availability", "Availability", "Verification services are available when employers, the public and other systems need them, with agreed service levels."),
    ("offline-use", "Offline and low-connectivity use", "Registration and verification work in low-connectivity settings, including through paper or assisted channels where needed."),
    ("languages", "Languages", "The registry and its public views support the languages its users need."),
    ("testability", "Testable requirements", "Every requirement is written so that conformance to it can be tested."),
]


# ── The chapters ─────────────────────────────────────────────────

def write_about(tops, manifest):
    about = dict(tops)["About this draft"]
    c = Chapter("about-this-draft", "About this draft", "chap:about-this-draft", tab="D")
    intro = "\n\n".join(p.strip() for p in "\n".join(l for l in about if not l.strip().startswith("**")).split("**Questions")[0].split("\n\n") if p.strip() and not p.strip().startswith("*"))
    first = next((l.strip() for l in about if l.strip() and not l.strip().startswith("*")), "")
    c.section("About this draft", "sec:about-lead", [c.prose("p-about", "prose:about-this-draft", "About this draft",
        first + "\n\nThis is the working document of the handbook, seeded from the TWG manuscript outline of 2 October 2026. "
        "Working-group members comment on any block; comments are grouped into change sets, decided, and made on a branch "
        "with a preview of the result (see the repository README).")], lead=True)
    blocks, order = split_labelled(about)
    qs = bullets(blocks.get("Questions for the TWG", []))
    c.section("Questions for the TWG", "sec:about-questions", [c.prose("p-twg-questions", "prose:twg-questions", "Questions for the TWG", md_list(qs))])
    pts = []
    for l in blocks.get("Points for discussion", []):
        m = re.match(r"^\s*\*\s+\*\*(.+?)\*\*\s*(.*)$", l)
        if m:
            pts.append((m.group(1).strip().rstrip("?").strip(), m.group(1).strip(), m.group(2).strip()))
    rem = []
    for short, title, text in pts:
        s = slug(short, 40)
        rem.append(c.remark(f"r-discussion-{s}", f"rem:discussion-{s}", title, text))
    c.section("Points for discussion", "sec:about-discussion", rem)
    # Handbook at a glance: the outline's table, verbatim.
    glance = [l for l in dict(tops)["Handbook at a glance"] if l.strip().startswith("|")]
    glance = [re.sub(r"\*\*(.*?)\*\*", r"\1", l) for l in glance]
    c.section("Handbook at a glance", "sec:about-glance", [c.block("t-handbook-at-a-glance", "table",
        {"label": "tbl:handbook-at-a-glance", "caption": "Handbook at a glance: parts, chapters and sections", "meta": src_meta()},
        "\n".join(glance))])
    c.write()
    manifest.append(c.dirname)


def write_chapter(num, title, lines, part_title, part_purpose, first_in_part, manifest, chapter_dirs):
    dirname = f"ch{num:02d}-{slug(title, 40)}"
    chapter_dirs[num] = dirname
    pfx = f"ch{num:02d}"
    c = Chapter(dirname, f"Chapter {num}. {title}", f"chap:{dirname}", number=num, meta={"part": part_title})
    blocks, order = split_labelled(lines)

    lead = []
    if first_in_part and part_purpose:
        lead.append(c.prose(f"p-{pfx}-part-purpose", f"prose:{pfx}-part-purpose", f"{part_title}: purpose", f"**{part_title}.** {part_purpose}"))
    objs = bullets(blocks.get("Chapter objectives", []))
    if objs:
        lead.append(c.prose(f"p-{pfx}-objectives", f"prose:{pfx}-objectives", "Chapter objectives", "**Chapter objectives.** This chapter will help readers to:\n\n" + md_list(objs)))
    keys = bullets(blocks.get("Key messages", []))
    if keys:
        lead.append(c.prose(f"p-{pfx}-key-messages", f"prose:{pfx}-key-messages", "Key messages", "**Key messages**\n\n" + md_list(keys)))
    c.section("Objectives and key messages", f"sec:{pfx}-lead", lead, lead=True)

    for key in order:
        if not key.startswith("§"):
            continue
        st = key[1:]
        m = re.match(r"^(\d+\.\d+)\s+(.*)$", st)
        secno, stitle = (m.group(1), m.group(2)) if m else ("", st)
        ss = slug(stitle, 40)
        items = bullets(blocks[key])
        bl = [c.prose(f"p-{pfx}-{ss}", f"prose:{pfx}-{ss}", st, md_list(items))]
        bl += l1_assets(c, num, secno, stitle, items)
        if num == 20:
            # The illustrative use cases ARE user scenarios; the bullets are the walkthrough.
            bl = [user_scenario(c, slug(stitle, 40), stitle, ILLUSTRATIVE_PERSONAS.get(stitle, ["health-worker"]), md_list(items))]
        c.section(st, f"sec:{secno.replace('.', '-')}" if secno else f"sec:{pfx}-{ss}", bl)

    if num == 7:
        nb = [c.prose(f"p-{pfx}-nfr-intro", f"prose:{pfx}-nfr-intro", "Non-functional requirements",
                      "Non-functional requirements matter as much as functions. The initial set, from the chapter's key messages:")]
        for i, (nid, ntitle, ntext) in enumerate(NFR, start=1):
            nb.append(c.block(f"nfr-{nid}", "nonFunctionalRequirement",
                {"label": f"nfreq:NFR-{i:02d}", "title": ntitle, "uses": [], "meta": src_meta(requirementId=f"NFR-{i:02d}", priority="must")},
                f"**NFR-{i:02d} {ntitle}.** {ntext}", dak=True))
        c.section("Non-functional requirements", "sec:7-nfr", nb)

    tail = []
    for lab, bid, ttl in [("Suggested figures and tables", "figures", "Suggested figures and tables"),
                          ("Implementation tools and checklists", "tools", "Implementation tools and checklists"),
                          ("Expected outputs for countries", "outputs", "Expected outputs for countries")]:
        items = bullets(blocks.get(lab, []))
        if items:
            tail.append(c.prose(f"p-{pfx}-{bid}", f"prose:{pfx}-{bid}", ttl, f"**{ttl}**\n\n" + md_list(items)))
    if tail:
        c.section("Figures, tools and expected outputs", f"sec:{pfx}-planned", tail)
    c.write()
    manifest.append(dirname)


def user_scenario(c, sid, title, personas, body):
    return c.block(f"scen-{sid}", "userScenario",
        {"label": f"scen:{sid}", "title": title, "personas": [f"pers:{p}" for p in personas], "uses": [], "meta": src_meta()},
        body + "\n\n*Personas:* " + ", ".join(next(n for i, n, *_ in PERSONAS if i == p) for p in personas), dak=True)


def l1_assets(c, num, secno, stitle, items):
    out = []
    if secno == "3.1" and DIIG_SVG.exists():
        media = FOLIO / "media"
        media.mkdir(parents=True, exist_ok=True)
        shutil.copyfile(DIIG_SVG, media / "diig-fig-1-1-1.svg")
        out.append(c.block("f-diig-phases", "figure", {
            "label": "fig:diig-phases",
            "file": "media/diig-fig-1-1-1.svg",
            "caption": "Planning and implementing a digital health enterprise: phases, steps and resources (DIIG Fig. 1.1.1)",
            "page": 17,
            "meta": {"source": {"library": "9789240010567-eng", "file": "smart-base/library/9789240010567-eng/figures/vfig-p017.svg",
                                "page": 17, "method": "reused-from-smart-base",
                                "citation": "WHO. Digital implementation investment guide (DIIG). 2020. Fig. 1.1.1"}},
        }, "![Planning and implementing a digital health enterprise: phases, steps and resources (DIIG Fig. 1.1.1)](media/diig-fig-1-1-1.svg)\n\n"
           "*Source: WHO Digital implementation investment guide (DIIG), 2020, Fig. 1.1.1. Reused from the smart-base library.*"))
    if secno == "5.1":
        for pid, name, kind, desc, generic in PERSONAS:
            body = [f"*{'System' if kind == 'system' else 'Person'}.* {desc}"]
            if generic:
                body += ["", f"*Specialises the SMART Guidelines generic persona:* {generic}."]
            body += ["", "| Goals | Tasks | Difficulties | Digital skills | Connectivity |", "|---|---|---|---|---|", "| *to draft* | *to draft* | *to draft* | *to draft* | *to draft* |"]
            meta = src_meta(personaType=kind)
            if generic:
                meta["smartBaseGenericPersona"] = generic
            out.append(c.block(f"pers-{pid}", "persona", {"label": f"pers:{pid}", "title": name, "uses": [], "meta": meta}, "\n".join(body), dak=True))
    if secno == "5.2":
        for sid, title, personas, desc in PRIORITY_USE_CASES:
            out.append(user_scenario(c, sid, title, personas, desc))
    if num == 7 and secno in FR_PREFIX:
        p = FR_PREFIX[secno]
        for i, it in enumerate(items, start=1):
            rid = f"FR-{p}-{i:02d}"
            out.append(c.block(f"fr-{p.lower()}-{i:02d}", "functionalRequirement",
                {"label": f"freq:{rid}", "title": it if len(it) <= 80 else it[:77].rsplit(' ', 1)[0] + "…", "uses": [],
                 "meta": src_meta(requirementId=rid, priority="to-be-prioritized")},
                f"**{rid}.** {it}\n\n*Priority:* to be set (must / should / could). *Linked use cases:* to be traced.", dak=True))
    if secno == "11.1":
        for i, (did, name) in enumerate(MDS_2015, start=1):
            out.append(c.block(f"de-{did}", "dataElement",
                {"label": f"de:mds-{did}", "title": name, "uses": [],
                 "meta": src_meta(minimumDataSet="WHO 2015", position=i)},
                f"**{name}** — element {i} of the WHO 2015 minimum data set for a health workforce registry.\n\n"
                "| Definition | Format | Mandatory | Source | Sensitivity | FHIR mapping |\n|---|---|---|---|---|---|\n"
                "| *to draft* | *to draft* | *to draft* | *to draft* | *to draft* | *to draft* |", dak=True))
    return out


def write_annexes(tops, manifest):
    c = Chapter("annexes", "Annexes", "chap:annexes", tab="A")
    lead = c.prose("p-annexes", "prose:annexes", "Annexes", "The annexes hold the full versions of the tools, templates and reference material the chapters point to. Annex 9 (Glossary) is its own chapter.")
    c.section("Annexes", "sec:annexes-lead", [lead], lead=True)
    for l in dict(tops)["Annexes"]:
        m = re.match(r"^\s*\*\s+\*\*Annex (\d+)\.\s*(.+?):\*\*\s*(.*)$", l)
        if not m:
            continue
        n, t, d = int(m.group(1)), m.group(2).strip(), m.group(3).strip()
        if n == 9:
            continue
        note = {4: "\n\nThe generic personas are drafted as structured persona blocks in section 5.1.",
                5: "\n\nThe functional and non-functional requirements are drafted as structured requirement blocks in Chapter 7.",
                1: "\n\nThe 2015 elements are drafted as structured data-element blocks in section 11.1."}.get(n, "")
        c.section(f"Annex {n}. {t}", f"sec:annex-{n}", [c.prose(f"p-annex-{n}", f"prose:annex-{n}", f"Annex {n}. {t}", d + note)])
    c.write()
    manifest.append(c.dirname)


def write_references(tops, manifest):
    c = Chapter("references", "References", "chap:references", tab="R")
    refs = bullets(dict(tops)["References"])
    c.section("References", "sec:references-lead", [c.prose("p-references", "prose:references", "References", md_list(refs))], lead=True)
    c.write()
    manifest.append(c.dirname)


def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    force = "--force" in sys.argv
    if len(args) != 1:
        print(__doc__)
        sys.exit(2)
    tops = parse(Path(args[0]).read_text())
    existing = [d for d in FOLIO.iterdir() if d.is_dir() and d.name not in ("glossary", "media")] if FOLIO.exists() else []
    if existing and not force:
        print(f"refusing: {FOLIO} already has chapters ({', '.join(d.name for d in existing)}). This is a one-time seed; pass --force to discard hand edits.")
        sys.exit(1)
    for d in existing:
        shutil.rmtree(d)

    manifest, chapter_dirs = [], {}
    write_about(tops, manifest)
    for title, body in tops:
        m = re.match(r"^Part (\d+)\.\s*(.+)$", title)
        if not m:
            continue
        purpose, chapters = parse_chapters(body)
        for i, (num, ctitle, lines) in enumerate(chapters):
            write_chapter(num, ctitle, lines, title, purpose, i == 0, manifest, chapter_dirs)
    write_annexes(tops, manifest)
    manifest.append("glossary")
    write_references(tops, manifest)

    refs = "\n".join(f'    chapterRef({{ dir: "{d}" }}),' for d in manifest)
    (FOLIO / f"{DOC}.ts").write_text(f'''import {{ paper, chapterRef }} from "../schema/builders";

/**
 * {TITLE}
 *
 * The document manifest. `chapters` is an ORDERED list — its order is the
 * reading order, and it is the only place that order is recorded. To move a
 * chapter, move its entry here; never rename the directory to encode position,
 * because labels, uses[], feedback and QA sidecars all key on names.
 *
 * Seeded from the TWG manuscript outline (2026-10-02) by
 * tools/folio/build_from_outline.py; edited by hand from then on.
 */
export default paper({{
  title: {json.dumps(TITLE)},
  authors: ["World Health Organization"],
  date: "2026-10-14",
  meta: {{
    documentKind: "smart-base:dth",
    level: "L1",
    status: "working draft (TWG outline stage)",
  }},
  chapters: [
{refs}
  ],
}});
''')
    print(f"folio: {len(manifest)} chapters written to {FOLIO}")


if __name__ == "__main__":
    main()
