#!/usr/bin/env python3
"""Build the DTH-HRH glossary from the TWG glossary workbook.

Usage:
    python3 -I scripts/glossary/build_glossary.py <workbook.xlsx> <glossary dir>

Reads the TWG workbook (library/twg-glossary-2026-09-29/) and writes three
folio-glossary/v1 schemes (SKOS) into <glossary dir>:

  twg-candidates.glossary.json
      Every definition the workbook proposes, one term per (concept, source),
      status "candidate". A definition from one publication and a definition
      from another are two concepts, never merged: the platform rule "one
      ConceptScheme per code list; a relation is a SKOS match, never a merge".
  twg-professional-council-examples.glossary.json
      The "Professional council" sheet: one candidate per council. The
      workbook says these were AI generated and need verifying.
  dth-hrh.glossary.json
      The consolidated glossary of the handbook: one term per concept, with
      `related` pointing at each candidate definition. Every term starts as a
      candidate with no definition. The working group adopts one (or an
      edited one), and only then does a person set `definition` and
      `status: "authored"`. This script never writes an authored term, and
      it keeps any term a person has already authored when it is re-run.

It also writes folio/dth-hrh/glossary/, the glossary chapter of the working
document: one block per concept listing its candidate definitions, so the
working group can comment on each term where it is read.

Nothing here decides a definition.
"""

import json
import re
import sys
from pathlib import Path

import openpyxl

# The instance namespace (instanceNamespace: iriBase in dth-hrh.json, then
# v<major>/ns#), so a related IRI names the term core publishes at it.
NS = "https://litlfred.github.io/dth-hrh/v0/ns#"
TODAY = "2026-10-14"
WORKBOOK_REF = "library/twg-glossary-2026-09-29/HWF_registry_DTH_Glossary_DRAFT.xlsx"

# Short keys for the publications the workbook cites. First match wins.
SOURCES = [
    # Specific titles first: this one also contains "National Health Workforce Accounts".
    ("Tech Tuesday", "intrahealth-2015", "IntraHealth Tech Tuesday: health worker registries, MDS and NHWA (2015)"),
    ("Health labour market analysis guidebook", "who-hlma-2021", "WHO. Health labour market analysis guidebook. 2021"),
    ("ealth practitioner regulation", "who-hpr-2024", "WHO. Health practitioner regulation: design, reform and implementation guidance. 2024"),
    ("National health workforce accounts", "who-nhwa-2023", "WHO. National health workforce accounts: a handbook, 2nd ed. 2023"),
    ("Minimum Data Set for Health Workforce Registry", "who-hrhis-mds-2015", "WHO. HRH information system: minimum data set for health workforce registry. 2015"),
    ("MDS) Crosswalk", "who-mds-crosswalk", "WHO Minimum Data Set (MDS) crosswalk (undated)"),
    ("OpenHIE Health Worker Registry", "openhie-hwr-ig-2016", "OpenHIE Health Worker Registry implementation guide (IntraHealth/CapacityPlus, 2016)"),
    ("Digital Health Enterprise Planning", "dhe-planning-deck", "Digital Health Enterprise Planning Approach, training slide deck (undated)"),
    ("Investment Charter", "who-afro-hwf-charter", "WHO AFRO. Africa Health Workforce Investment Charter"),
    ("Chibuzor", "chibuzor-hwfis-review", "Chibuzor M et al. Implementation of health workforce information systems: eight sub-Saharan countries"),
    ("Reference Architecture and Guidance for Digital Public Infrastructure", "who-itu-dpi-h-ra-draft-2026", "WHO/ITU. DPI-H reference architecture, draft v1.0 for public comment. July 2026"),
    ("GDHCN", "who-gdhcn-framework-2026", "WHO. Framework for the Global Digital Health Certification Network (GDHCN). 2026"),
    ("Observatories", "who-hrh-observatories-2012", "WHO. Human resources for health observatories. 2012"),
    ("Ishijima", "ishijima-hrhis-tanzania", "Ishijima H et al. HRHIS and TIIS national rollout in Tanzania"),
    ("Joachim", "joachim-hwf-forecasting", "Joachim M et al. Aligning health workforce forecasting and planning with changing care models"),
    ("Leitner", "intrahealth-hwis-2013", "Leitner C et al. Health worker information systems in low resource settings (IntraHealth, 2013)"),
    ("MEASURE Evaluation", "measure-evaluation-m3-2018", "MEASURE Evaluation, Module 3. 2018"),
    ("Western Pacific", "who-wpro-hwf-framework-2024", "WHO WPRO. Regional framework to shape a health workforce for the future of the Western Pacific. 2024"),
    ("Riley PL", "riley-hrhis-review-2012", "Riley PL et al. Information systems on human resources for health: a global review. 2012"),
    ("Strengthening the collection", "who-hwf-data-handbook-2022", "WHO. Strengthening the collection, analysis and use of health workforce data and information. 2022"),
    ("African Regional Framework", "who-afro-workforce2030-2020", "WHO AFRO. Regional framework for Workforce 2030. 2020"),
    ("European Health Workforce", "eurohealth-2022", "Eurohealth. The European health workforce: building a true labour market. 2022"),
    ("rural and remote", "who-rural-retention-2021", "WHO guideline on health workforce development, attraction, recruitment and retention in rural and remote areas. 2021"),
    ("Were V", "were-south-south-hris", "Were V et al. South-South collaboration on HRIS"),
    ("Wikipedia", "wikipedia-hrhis", "Wikipedia: HRHIS"),
    ("Zimbabwe", "waters-zhris", "Waters KP et al. Zimbabwe's HRH information system (ZHRIS)"),
]

# The detail sheets attach their definitions to these general-glossary concepts.
DETAIL_SHEETS = {
    "HWF registry": "health-workforce-registry",
    "HRHIS": "human-resources-for-health-information-system",
}
PRIORITY = {
    "health-workforce-registry",
    "human-resources-for-health-information-system",
    "professional-council",
}


def clean(s):
    return " ".join(str(s).split()) if s is not None else ""


def text(s):
    """Keep paragraph breaks, normalise whitespace within lines."""
    if s is None:
        return ""
    paras = [" ".join(p.split()) for p in re.split(r"\n\s*\n", str(s).strip())]
    out = "\n\n".join(p for p in paras if p)
    # Lines that were bullets in the workbook stay on their own line.
    return out.replace(" •", "\n•")


def slug(s, n=60):
    s = re.sub(r"\(.*?\)", "", s.lower())
    s = re.sub(r"[^a-z0-9]+", "-", s).strip("-")
    return s[:n].rstrip("-")


def source_key(s):
    for needle, key, title in SOURCES:
        if needle.lower() in s.lower():
            return key, title
    k = slug(" ".join(s.split()[:5]), 40) or "unknown"
    return k, clean(s)[:160]


def term_labels(raw):
    """'Health workers, health workforce, human resources for health (HRH)' -> pref + alts."""
    t = clean(raw).replace("heatth", "health")
    t = re.split(r"\s*REFER TO SHEET", t, flags=re.I)[0]
    t = t.rstrip(": ").strip()
    alts = []
    m = re.match(r"^(.*?)\s*\((.*)\)\s*$", t)
    if t.lower().startswith("professional council"):
        pref = "Professional council"
        alts = [a.strip() for a in re.split(r",|…", t[len("Professional council"):].strip(" ()")) if a.strip() and a.strip() != "..."]
        return pref, alts
    parts = [p.strip() for p in re.split(r",\s*|\s+/\s+|;\s*", t) if p.strip()]
    if len(parts) > 1 and not t.lower().startswith("employment status"):
        pref, alts = parts[0], parts[1:]
    else:
        pref = t
    if m and "/" not in pref and len(m.group(2)) <= 12:
        alts.append(m.group(2))
    return pref, alts


def term_id(pref):
    known = {
        "health workforce": "health-workforce",
        "health workforce registry": "health-workforce-registry",
        "health workforce observatory": "health-workforce-observatory",
        "human resources for health information system": "human-resources-for-health-information-system",
    }
    p = re.sub(r"\(.*?\)", "", pref).strip().lower()
    return known.get(p, slug(p))


def read(wb_path):
    wb = openpyxl.load_workbook(wb_path, data_only=True)
    concepts = {}  # id -> {pref, alts, candidates: [(source raw, definition, where)]}
    order = []
    ws = wb["General glossary "]
    for r, row in enumerate(ws.iter_rows(min_row=3, values_only=True), start=3):
        if not row[0]:
            continue
        raw = clean(row[0]).lower()
        if raw.startswith("health workforce / worker / provider registry"):
            pref, alts = "Health workforce registry", ["Health worker registry", "Provider registry"]
        elif raw.startswith("human resources for health information system"):
            pref, alts = "Human resources for health information system", ["HRH-IS"]
        elif raw.startswith("health workforce observatory"):
            pref, alts = "Health workforce observatory", ["HRH observatory (national)"]
        else:
            pref, alts = term_labels(row[0])
        tid = term_id(pref)
        c = concepts.setdefault(tid, {"pref": pref, "alts": alts, "candidates": []})
        if tid not in order:
            order.append(tid)
        for i in (1, 3, 5, 7):
            if row[i]:
                c["candidates"].append((clean(row[i + 1]), text(row[i]), f"General glossary!row {r}"))
    for sheet, tid in DETAIL_SHEETS.items():
        ws = wb[sheet]
        header = clean(ws.cell(1, 2).value)
        c = concepts[tid]
        for a in [a.strip() for a in header.split(";") if a.strip()]:
            if a.lower() != c["pref"].lower() and a not in c["alts"]:
                c["alts"].append(a)
        for r, row in enumerate(ws.iter_rows(min_row=3, values_only=True), start=3):
            if row[1]:
                c["candidates"].append((clean(row[2]), text(row[1]), f"{sheet}!row {r}"))
    councils = []
    ws = wb["Professional council"]
    for r, row in enumerate(ws.iter_rows(min_row=3, values_only=True), start=3):
        if row[2]:
            councils.append({
                "region": clean(row[0]), "country": clean(row[1]), "name": clean(row[2]),
                "professions": clean(row[3]), "definition": text(row[4]), "mandate": text(row[5]),
                "ref": clean(row[6]), "row": r,
            })
    return concepts, order, apply_council_checks(councils)


COUNCIL_CHECKS = Path("glossary/professional-council-checks.json")
COUNCIL_CHECKED_ON = ""
CHECK_LABEL = {
    "verified": "verified",
    "corrected": "corrected",
    "partly-verified": "partly verified",
    "unverified": "not verified",
    "not-verified": "not verified",
}


def apply_council_checks(councils):
    """Overlay the fact-check of the AI-generated council rows.

    The workbook stays as received (library/ is frozen). Each record in
    glossary/professional-council-checks.json is keyed by workbook row and
    carries a verdict, the corrected fields, and the evidence (a fetched URL
    and the sentence that supports it). A correction replaces the workbook
    value here and the original is kept under `asReceived`, so nothing is
    silently overwritten. A row with no record stays "not checked".
    """
    global COUNCIL_CHECKED_ON
    checks = {}
    if COUNCIL_CHECKS.exists():
        doc = json.loads(COUNCIL_CHECKS.read_text())
        COUNCIL_CHECKED_ON = doc.get("checkedOn", "")
        for rec in doc["checks"]:
            checks[rec["row"]] = rec
    field = {"council": "name", "professions": "professions", "definition": "definition", "mandate": "mandate", "reference": "ref"}
    for k in councils:
        rec = checks.get(k["row"])
        k["check"] = rec
        if not rec:
            continue
        k["asReceived"] = {}
        for src, dst in field.items():
            new = (rec.get("corrections") or {}).get(src)
            if new and new != k[dst]:
                k["asReceived"][dst] = k[dst]
                k[dst] = new
    return councils


def check_note(k):
    rec = k.get("check")
    if not rec:
        return "Not yet checked against its source."
    if rec["verdict"] == "not-verified":
        leads = ", ".join(dict.fromkeys(e["url"] for e in rec.get("searchLeads", [])))
        return (f"Checked {COUNCIL_CHECKED_ON}: not verified (source pages could not be opened; web search only). "
                f"Suspected issues, to confirm: {rec.get('suspectedIssues') or 'none found'}"
                + (f" Search leads: {leads}." if leads else ""))
    urls = ", ".join(dict.fromkeys(e["url"] for e in rec.get("evidence", [])))
    fixed = ", ".join(k.get("asReceived", {})) or "nothing"
    return (f"Checked {rec.get('checkedOn', '')}: {CHECK_LABEL.get(rec['verdict'], rec['verdict'])}. "
            f"Corrected from the workbook: {fixed}. Evidence: {urls or 'none found'}."
            + (f" {rec['notes']}" if rec.get("notes") else ""))


def dedupe_alts(pref, alts):
    seen, out = {pref.lower()}, []
    for a in alts:
        a = a.strip(" .")
        if a and a.lower() not in seen:
            seen.add(a.lower())
            out.append(a)
    return out


def build(wb_path, out_dir):
    concepts, order, councils = read(wb_path)
    out_dir.mkdir(parents=True, exist_ok=True)

    cand_terms, links = [], {}
    for tid in order:
        c = concepts[tid]
        used = {}
        links[tid] = []
        for raw_src, definition, where in c["candidates"]:
            key, title = source_key(raw_src) if raw_src else ("unsourced", "no source given")
            used[key] = used.get(key, 0) + 1
            cid = f"{tid}--{key}" + (f"-{used[key]}" if used[key] > 1 else "")
            cand_terms.append({
                "id": cid,
                "prefLabel": c["pref"],
                "definition": definition,
                "scopeNote": f"Cited as: {raw_src or '(no source given)'}",
                "source": f"{WORKBOOK_REF}#{where}",
                "status": "candidate",
            })
            links[tid].append((cid, key, title, definition))

    candidates = {
        "$schema": "folio-glossary/v1",
        "id": "twg-candidates",
        "title": "Candidate definitions proposed to the TWG",
        "description": (
            "Every definition the TWG glossary workbook (2026-09-29) proposes, one term per concept and source, "
            "extracted and not curated. The workbook's own notes: 'remain consistent with existing WHO publications, "
            "unless there is a reason to update a definition', and 'some definitions and sources are AI generated and "
            "may need correction'. A candidate is never a definition of the handbook: the consolidated scheme "
            "dth-hrh.glossary.json relates each concept to its candidates, and the working group adopts one. "
            "Generated by scripts/glossary/build_glossary.py; do not hand-edit."
        ),
        "modified": TODAY,
        "source": WORKBOOK_REF,
        "terms": cand_terms,
    }

    council_terms = []
    for k in councils:
        cid = slug(f"{k['country']}-{k['name']}", 80)
        council_terms.append({
            "id": cid,
            "prefLabel": k["name"],
            "notation": f"{k['region']} / {k['country']}",
            "definition": k["definition"] or k["mandate"] or "(none given)",
            "scopeNote": f"Regulates: {k['professions']}. Mandate: {k['mandate']} Reference: {k['ref']} {check_note(k)}",
            "source": f"{WORKBOOK_REF}#Professional council!row {k['row']}",
            "status": "candidate",
        })
    council = {
        "$schema": "folio-glossary/v1",
        "id": "twg-professional-council-examples",
        "title": "Professional councils: country examples",
        "description": (
            "Statutory definitions and mandates of health professional councils and boards in the six WHO regions, "
            "from the 'Professional council' sheet of the TWG workbook. The workbook records that these were produced "
            "by an AI prompt, so each row was fact-checked against official sources; the verdict, the corrected fields "
            "and the evidence are in glossary/professional-council-checks.json and each term's scopeNote. "
            "Generated by scripts/glossary/build_glossary.py; do not hand-edit."
        ),
        "modified": TODAY,
        "source": WORKBOOK_REF,
        "terms": council_terms,
    }

    # The consolidated glossary keeps whatever a person has already authored.
    main_path = out_dir / "dth-hrh.glossary.json"
    prior = {}
    # SKOS matches to other schemes (such as smart-ra's dpi-h-ra glossary,
    # dth-hrh#47) are curated links, not workbook content: keep them too.
    MATCHES = ("exactMatch", "closeMatch", "broadMatch", "narrowMatch")
    prior_matches = {}
    if main_path.exists():
        for t in json.loads(main_path.read_text()).get("terms", []):
            if t.get("status") == "authored":
                prior[t["id"]] = t
            kept = {m: t[m] for m in MATCHES if t.get(m)}
            if kept:
                prior_matches[t["id"]] = kept
    terms = []
    for tid in order:
        c = concepts[tid]
        if tid in prior:
            terms.append(prior[tid])
            continue
        n = len(links[tid])
        t = {
            "id": tid,
            "prefLabel": c["pref"],
        }
        alts = dedupe_alts(c["pref"], c["alts"])
        if alts:
            t["altLabel"] = alts
        note = f"Open for working-group review: {n} candidate definition{'s' if n != 1 else ''}, none adopted."
        if tid in PRIORITY:
            note += " TWG priority term (workbook instructions)."
        if tid == "health-workforce-registry":
            note += " Must stay consistent with the final DPI-H reference architecture definition."
        t["scopeNote"] = note
        rel = [f"{NS}glossary/twg-candidates/{cid}" for cid, *_ in links[tid]]
        if tid == "professional-council":
            rel.append(f"{NS}glossary/twg-professional-council-examples")
        if rel:
            t["related"] = rel
        t["source"] = WORKBOOK_REF
        t["status"] = "candidate"
        t.update(prior_matches.get(tid, {}))
        terms.append(t)
    main = {
        "$schema": "folio-glossary/v1",
        "id": "dth-hrh",
        "title": "Glossary of the Digital Transformation Handbook for Human Resources for Health and Health Worker Registries",
        "description": (
            "The handbook's health workforce terms (digital terms are addressed separately). One concept per term, each "
            "related to the candidate definitions in twg-candidates.glossary.json. A term becomes 'authored' only when "
            "the working group adopts a definition: a person sets `definition` and `status`, citing the change set that "
            "decided it in `scopeNote`. Re-running scripts/glossary/build_glossary.py keeps authored terms."
        ),
        "modified": TODAY,
        "source": WORKBOOK_REF,
        "license": "CC-BY-NC-SA-3.0-IGO",
        "terms": terms,
    }

    for name, doc in [("twg-candidates", candidates), ("twg-professional-council-examples", council), ("dth-hrh", main)]:
        (out_dir / f"{name}.glossary.json").write_text(json.dumps(doc, indent=2, ensure_ascii=False) + "\n")
    return concepts, order, links, councils, prior


# ── The glossary chapter of the working document ───────────────

def md_escape_cell(s):
    return s.replace("|", "\\|").replace("\n", "<br>")


def opening(definition, n=220):
    """The candidate's first sentence (quotes and page markers trimmed), for a side-by-side view."""
    s = " ".join(definition.split()).lstrip("\"“ ")
    m = re.match(r"(.+?[.;])(\s|$)", s)
    s = m.group(1) if m else s
    return s if len(s) <= n else s[: n - 1].rsplit(" ", 1)[0] + "…"


def comparison_table(ch, tid, pref, cands):
    """A priority term's candidates side by side: source, year, opening sentence. Facts only."""
    bid = f"t-compare-{tid}"
    (ch / f"{bid}.ts").write_text(
        'import { table } from "../../schema/builders";\n\nexport default table({\n'
        f'  label: "tbl:compare-{tid}",\n'
        f'  caption: {json.dumps(f"{pref}: candidate definitions side by side (opening sentence of each)")},\n'
        "});\n"
    )
    rows = ["| # | Source | Year | Opening sentence |", "|---|---|---|---|"]
    for i, (cid, key, title, definition) in enumerate(cands, start=1):
        y = re.findall(r"\b(?:19|20)\d\d\b", title)
        rows.append(f"| {i} | {md_escape_cell(title)} | {y[-1] if y else '—'} | {md_escape_cell(opening(definition))} |")
    (ch / f"{bid}.md").write_text("\n".join(rows) + "\n")
    return bid


def write_chapter(folio_dir, concepts, order, links, councils, prior):
    ch = folio_dir / "glossary"
    if ch.exists():
        for f in ch.iterdir():
            f.unlink()
    ch.mkdir(parents=True, exist_ok=True)
    blocks_priority, blocks_general = [], []

    lead = "p-glossary-about"
    (ch / f"{lead}.ts").write_text(
        'import { prose } from "../../schema/builders";\n\nexport default prose({\n'
        f'  label: "prose:glossary-about",\n  title: "About this glossary",\n  uses: [],\n}});\n'
    )
    (ch / f"{lead}.md").write_text(
        "This glossary covers health workforce terms. Digital terms are addressed separately.\n\n"
        "The working group's task is to agree a definition for each term, staying consistent with existing WHO "
        "publications unless there is a reason to update one. The priority terms are *health workforce registry*, "
        "*human resources for health information system* and *professional council*. The registry definition must "
        "match the final definition in the DPI-H reference architecture.\n\n"
        "Each entry below lists the candidate definitions proposed in the TWG glossary workbook (29 September 2026), "
        "each with its source. Comment on the entry: say which candidate you prefer, or propose an edited or new "
        "definition. Some definitions and sources in the workbook were generated with AI and may need correction.\n\n"
        "The machine-readable form is in `glossary/` (SKOS concept schemes). This chapter is generated from it by "
        "`scripts/glossary/build_glossary.py`; edit the glossary, not this chapter.\n"
    )

    for tid in order:
        c = concepts[tid]
        bid = f"g-{tid}"
        label = f"prose:gloss-{tid}"
        (ch / f"{bid}.ts").write_text(
            'import { prose } from "../../schema/builders";\n\nexport default prose({\n'
            f'  label: "{label}",\n  title: {json.dumps(c["pref"])},\n  uses: [],\n'
            f'  meta: {{ glossary: {{ scheme: "dth-hrh", term: "{tid}" }} }},\n}});\n'
        )
        alts = dedupe_alts(c["pref"], c["alts"])
        lines = [f"*Also:* {', '.join(alts)}." if alts else f"*Term:* {c['pref']}."]
        if tid in prior:
            d = prior[tid]["definition"]
            lines += ["", f"*Adopted definition:* {d if isinstance(d, str) else next(iter(d.values()))}"]
        else:
            lines += ["", f"*Status:* open. {len(links[tid])} candidate definition{'s' if len(links[tid]) != 1 else ''}, none adopted."]
        for i, (cid, key, title, definition) in enumerate(links[tid], start=1):
            lines += ["", f"**Candidate {i}** ({title}):", ""]
            lines += ["> " + ln if ln else ">" for ln in definition.split("\n")]
        if tid == "professional-council":
            lines += ["", "Country examples are listed in the section *Professional councils: country examples*."]
        (ch / f"{bid}.md").write_text("\n".join(lines) + "\n")
        (blocks_priority if tid in PRIORITY else blocks_general).append(bid)
        if tid in PRIORITY and tid not in prior:
            blocks_priority.append(comparison_table(ch, tid, c["pref"], links[tid]))

    tbl = "t-professional-council-examples"
    (ch / f"{tbl}.ts").write_text(
        'import { table } from "../../schema/builders";\n\nexport default table({\n'
        '  label: "tbl:professional-council-examples",\n'
        '  caption: "Professional councils and boards: statutory definitions and mandates (AI generated in the workbook, then fact-checked; see the Checked column)",\n'
        "});\n"
    )
    rows = ["| WHO region | Country | Council | Regulates | Statutory definition | Mandate | Reference | Checked |", "|---|---|---|---|---|---|---|---|"]
    for k in councils:
        rec = k.get("check")
        if rec and rec["verdict"] == "not-verified":
            leads = " ".join(f"[{i}]({u})" for i, u in enumerate(dict.fromkeys(e["url"] for e in rec.get("searchLeads", [])), start=1))
            checked = "**not verified** (sources could not be opened). Suspected: " + (rec.get("suspectedIssues") or "none") + (f" Leads: {leads}" if leads else "")
        elif rec:
            links = " ".join(f"[{i}]({e['url']})" for i, e in enumerate(dict((e["url"], e) for e in rec.get("evidence", [])).values(), start=1))
            fixed = ", ".join(k.get("asReceived", {}))
            checked = CHECK_LABEL.get(rec["verdict"], rec["verdict"]) + (f" (corrected: {fixed})" if fixed else "") + (f" {links}" if links else "")
        else:
            checked = "not yet checked"
        rows.append("| " + " | ".join(md_escape_cell(x) for x in [k["region"], k["country"], k["name"], k["professions"], k["definition"], k["mandate"], k["ref"]]) + f" | {checked} |")
    (ch / f"{tbl}.md").write_text("\n".join(rows) + "\n")

    def sec(title, label, blocks, lead=False):
        b = ", ".join(json.dumps(x) for x in blocks)
        return (f"    section({{\n      title: {json.dumps(title)},\n      label: \"{label}\",\n"
                + ("      lead: true,\n" if lead else "") + f"      blocks: [{b}],\n    }}),\n")

    (ch / "glossary.ts").write_text(
        'import { chapter, section } from "../../schema/builders";\n\n'
        "/** Annex 9. Generated by scripts/glossary/build_glossary.py from glossary/; do not hand-edit. */\n"
        "export default chapter({\n"
        '  title: "Annex 9. Glossary",\n  label: "chap:glossary",\n  tabLabel: "G",\n  sections: [\n'
        + sec("About this glossary", "sec:glossary-lead", [lead], lead=True)
        + sec("Priority terms for TWG agreement", "sec:glossary-priority", blocks_priority)
        + sec("Health workforce terms", "sec:glossary-terms", blocks_general)
        + sec("Professional councils: country examples", "sec:glossary-councils", [tbl])
        + "  ],\n});\n"
    )


def main():
    if len(sys.argv) != 3:
        print(__doc__)
        sys.exit(2)
    wb_path, out_dir = Path(sys.argv[1]), Path(sys.argv[2])
    concepts, order, links, councils, prior = build(wb_path, out_dir)
    write_chapter(Path("folio/dth-hrh"), concepts, order, links, councils, prior)
    n = sum(len(v) for v in links.values())
    print(f"glossary: {len(order)} concepts, {n} candidate definitions, {len(councils)} council examples")


if __name__ == "__main__":
    main()
