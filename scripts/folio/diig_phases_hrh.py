#!/usr/bin/env python3
"""Draw fig:diig-phases for the HRH handbook (dth-hrh#37).

Redrawn from Fig. 4 of the WHO Digital transformation handbook for health
product catalogue (2025; smart-base library 9789240116191-eng, page 13),
which adapts DIIG Fig. 1.1.1. One change: this handbook is added as a tile
spanning phases 02-04, marked "(this document)", and the product catalogue
handbook loses that mark.

Usage: python3 -I scripts/folio/diig_phases_hrh.py > folio/dth-hrh/media/diig-phases-hrh.svg
"""
from xml.sax.saxutils import escape

# Phase colours, read from the source figure.
PHASES = [
    ("01", ["ASSESSING THE", "CURRENT STATE", "AND ENABLING", "ENVIRONMENT"], "#E8B800", "#FBF3CC", [
        "Conduct an inventory of existing or previously used software applications, ICT systems and other tools to better understand the requirements for reuse and interoperability",
    ]),
    ("02", ["ESTABLISHING", "A SHARED", "UNDERSTANDING", "AND STRATEGIC", "PLANNING"], "#7AB648", "#E8F2DC", [
        "Develop a national digital health strategy outlining overarching needs, desired activities and outcomes",
        "Define a vision for how the health system will be strengthened through the use of digital technology",
    ]),
    ("03", ["DEFINING THE", "FUTURE STATE"], "#1E9E78", "#D6EEE6", [
        "Formulate a digital health investment roadmap to support the national digital health strategy",
        "Plan and identify appropriate digital interventions, alongside the health and data content, to improve health system processes and address programmatic needs",
    ]),
    ("04", ["PLANNING THE", "ENTERPRISE", "ARCHITECTURE"], "#7B2D6E", "#E6D6E2", [
        "Review the current state and develop an architecture blueprint for the design of the digital health implementations",
        "Identify validated open standards to ensure data exchange, systems integration and future-proofing of digital health implementations",
    ]),
    ("05", ["DETERMINING", "HEALTH CONTENT", "REQUIREMENTS"], "#1A8FD6", "#D4E8F7", [
        "Identify validated health content appropriate for the implementation context",
        "Ensure use of content aligned with identified standards for the future state",
    ]),
    ("06", ["M&E OF DIGITAL", "HEALTH", "IMPLEMENTATIONS", "AND FOSTERING", "DATA USE"], "#D3302F", "#F6D8D2", [
        "Monitor implementation to ensure digital implementations are functioning as intended and having the desired effect",
        "Foster data-driven adaptive change management within the overall health system",
    ]),
    ("07", ["IMPLEMENTING,", "MAINTAINING AND", "SCALING"], "#E0306F", "#F9D9E3", [
        "Maintain and sustain digital health implementations",
        "Identify risks and appropriate mitigations",
    ]),
]

# (column, first row, last row, label lines, icons, outline phase index, small print)
# icons: "d" = PDF for print, "m" = online environment.
TILES = [
    (0, 0, 2, ["WHO–ITU", "national", "eHealth", "strategy", "toolkit"], "d", 0, None),
    (1, 0, 0, ["WHO", "digital", "health", "atlas"], "m", 0, None),
    (2, 0, 0, ["Global", "digital", "health", "index"], "m", 0, None),
    (3, 0, 0, ["Digital", "health", "investment", "review tool"], "d", 0, None),
    (4, 0, 0, ["HIS stages", "of continuous", "improvement"], "d", 0, None),
    (1, 1, 4, ["Digital", "implemen-", "tation", "investment", "guide"], "dm", 1, None),
    (2, 1, 1, ["WHO", "guideline:"], "d", 1, ["recommendations", "on digital", "interventions for", "health system", "strengthening"]),
    (3, 1, 1, ["WHO", "classification", "of digital", "health", "interventions"], "d", 1, None),
    (4, 1, 1, ["Principles", "for donor", "alignment"], "m", 1, None),
    (5, 1, 1, ["Principles", "for digital", "develop-", "ment"], "m", 1, None),
    (6, 1, 3, ["WHO", "handbook", "for health", "supply", "chain", "architecture"], "d", 2, None),
    (2, 2, 3, ["ITU SDG", "digital", "investment", "framework", "(eGov)"], "m", 2, None),
    (3, 2, 3, ["ITU digital", "health", "platform", "handbook"], "d", 2, None),
    (4, 2, 2, ["Digital", "Square", "global", "goods", "guidebook"], "d", 2, None),
    (5, 2, 2, ["UNICEF", "human-", "centred", "design", "toolkit"], "d", 2, None),
    (7, 2, 2, ["WHO digital", "clearing-", "house"], "m", 2, None),
    (0, 3, 3, ["Open", "Health", "Information", "Exchange", "(OpenHIE)"], "m", 3, None),
    (4, 3, 3, ["The Open", "Group", "Architecture", "Framework", "(TOGAF)"], "m", 3, None),
    (5, 3, 3, ["Guidance", "for investing", "in digital", "health"], "m", 3, None),
    (7, 3, 3, ["World Bank", "digital", "identity", "toolkit"], "d", 3, None),
    (0, 4, 4, ["WHO", "handbook for", "digitalizing", "primary", "health care"], "d", 4, None),
    (4, 4, 4, ["WHO core", "indicator", "sets"], "d", 4, None),
    (5, 4, 4, ["Be", "He@lthy,", "Be Mobile"], "d", 4, ["handbooks", "for non-", "communicable", "diseases"]),
    (0, 5, 5, ["WHO", "M&E", "digital", "health", "interven-", "tions"], "d", 5, None),
    (1, 5, 5, ["PATH", "Defining", "and", "building a", "data use", "culture"], "d", 5, None),
    (2, 5, 5, ["MEASURE", "data", "demand", "and use of", "resources"], "d", 5, None),
    (3, 5, 5, ["WHO SCORE"], "d", 5, None),
    (0, 6, 6, ["WHO", "MAPS toolkit:", "mHealth", "assessment", "and planning", "for scale"], "d", 6, None),
    (1, 6, 6, ["Asian", "Development", "Bank total", "cost of", "ownership", "tool"], "d", 6, None),
    (2, 6, 6, ["WHO", "handbook", "for health", "supply chain", "architecture"], "d", 2, None),
    (3, 6, 6, ["WHO", "handbook", "for health", "product", "catalogue"], "d", 2, None),
]
THIS = (8, 1, 3, ["WHO", "handbook", "for human", "resources", "for health", "and health", "worker", "registries"], "d")
HIGHLIGHT = "#1A8FD6"

ROW_H, ROW_GAP = 74, 5
TILE_X0, COL_W, COL_GAP = 462, 60, 4
BADGE_W, NAME_X, NAME_W, STEPS_X, STEPS_W = 42, 44, 92, 142, 312
TOP = 8
FONT = "'Open Sans','Segoe UI',Helvetica,Arial,sans-serif"


def row_y(r):
    return TOP + r * (ROW_H + ROW_GAP)


def col_x(c):
    return TILE_X0 + c * (COL_W + COL_GAP)


def wrap(text, width):
    words, lines, cur = text.split(), [], ""
    for w in words:
        if len(cur) + len(w) + 1 > width and cur:
            lines.append(cur)
            cur = w
        else:
            cur = f"{cur} {w}".strip()
    if cur:
        lines.append(cur)
    return lines


def icon(kind, x, y, color):
    if kind == "d":
        return (f'<path d="M{x} {y}h5l3 3v8h-8z" fill="none" stroke="{color}" stroke-width="1"/>'
                f'<path d="M{x+5} {y}v3h3" fill="none" stroke="{color}" stroke-width="1"/>')
    return (f'<rect x="{x-1}" y="{y+1}" width="10" height="7" rx="1" fill="none" stroke="{color}" stroke-width="1"/>'
            f'<path d="M{x+2} {y+10}h4M{x+4} {y+8}v2" stroke="{color}" stroke-width="1"/>')


def tile(c, r0, r1, lines, icons, color, small=None, this=False):
    x, y = col_x(c), row_y(r0)
    h = row_y(r1) + ROW_H - y
    out = []
    if this:
        out.append(f'<rect x="{x}" y="{y}" width="{COL_W}" height="{h}" rx="7" fill="#E8F3FB" '
                   f'stroke="{HIGHLIGHT}" stroke-width="2.5" stroke-dasharray="5 3"/>')
    else:
        out.append(f'<rect x="{x}" y="{y}" width="{COL_W}" height="{h}" rx="7" fill="#FFFFFF" '
                   f'stroke="{color}" stroke-width="1.2"/>')
    ix = x + COL_W - 12
    for k in reversed(icons):
        out.append(icon(k, ix, y + 4, color if not this else HIGHLIGHT))
        ix -= 13
    n = len(lines) + (len(small) * 0.7 if small else 0) + (1 if this else 0)
    lh = 10 if n > 5 else 11
    ty = max(y + h / 2 - n * lh / 2 + 8, y + 22)
    weight = ' font-weight="700"' if this else ""
    for i, line in enumerate(lines):
        out.append(f'<text x="{x + COL_W/2}" y="{ty + i*lh:.1f}" font-size="8.4" text-anchor="middle" '
                   f'fill="#3C3C3C"{weight}>{escape(line)}</text>')
    ty += len(lines) * lh
    for i, line in enumerate(small or []):
        out.append(f'<text x="{x + COL_W/2}" y="{ty + i*6.8 - 3:.1f}" font-size="5.8" text-anchor="middle" '
                   f'fill="#5A5A5A">{escape(line)}</text>')
    if this:
        out.append(f'<text x="{x + COL_W/2}" y="{ty + 1:.1f}" font-size="7" font-style="italic" '
                   f'text-anchor="middle" fill="{HIGHLIGHT}">(this document)</text>')
    return "".join(out)


def main():
    width = col_x(9) + 4
    height = row_y(7) + 4
    parts = [
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} {height}" width="{width}" height="{height}" '
        f'role="img" aria-labelledby="title desc" font-family="{FONT}">',
        '<title id="title">Planning and implementing a digital health enterprise: phases, steps and resources, '
        'with this handbook in phases 02 to 04</title>',
        '<desc id="desc">The seven DIIG phases, each with its steps and the resources that support it. '
        'Redrawn from Fig. 4 of the WHO Digital transformation handbook for health product catalogue (2025), '
        'which adapts DIIG Fig. 1.1.1. This handbook, on human resources for health and health worker registries, '
        'is added as a highlighted tile spanning phases 02 (shared understanding and strategic planning), '
        '03 (defining the future state) and 04 (planning the enterprise architecture).</desc>',
        f'<rect width="{width}" height="{height}" fill="#FFFFFF"/>',
    ]
    for i, (num, name, color, pale, steps) in enumerate(PHASES):
        y = row_y(i)
        parts.append(f'<rect x="4" y="{y}" width="{BADGE_W + NAME_W - 2}" height="{ROW_H}" rx="4" fill="{color}"/>')
        parts.append(f'<rect x="{BADGE_W + 2}" y="{y + 3}" width="0.8" height="{ROW_H - 6}" fill="#FFFFFF" opacity="0.6"/>')
        parts.append(f'<text x="{4 + BADGE_W/2}" y="{y + ROW_H/2 - 10}" font-size="7" text-anchor="middle" fill="#FFFFFF">PHASE</text>')
        parts.append(f'<text x="{4 + BADGE_W/2}" y="{y + ROW_H/2 + 14}" font-size="22" text-anchor="middle" fill="#FFFFFF">{num}</text>')
        ny = y + ROW_H / 2 - len(name) * 9.5 / 2 + 7
        for k, line in enumerate(name):
            parts.append(f'<text x="{NAME_X + 4 + NAME_W/2}" y="{ny + k*9.5:.1f}" font-size="8" font-weight="700" '
                         f'text-anchor="middle" fill="#FFFFFF">{escape(line)}</text>')
        parts.append(f'<rect x="{STEPS_X}" y="{y}" width="{STEPS_W}" height="{ROW_H}" rx="4" fill="{pale}"/>')
        lines = []
        for s in steps:
            w = wrap(s, 62)
            lines.append(("+ " + w[0], True))
            lines += [("  " + t, False) for t in w[1:]]
        sy = y + ROW_H / 2 - len(lines) * 10.5 / 2 + 8
        for k, (line, first) in enumerate(lines):
            x = STEPS_X + 8 if first else STEPS_X + 16
            parts.append(f'<text x="{x}" y="{sy + k*10.5:.1f}" font-size="8.6" fill="#333333">{escape(line.strip())}</text>')
    for c, r0, r1, lines, icons, p, small in TILES:
        parts.append(tile(c, r0, r1, lines, icons, PHASES[p][2], small))
    # WHO SMART guidelines: one tile across columns 2-3 in phase 05, with two parts.
    x, y, w = col_x(2), row_y(4), 2 * COL_W + COL_GAP
    blue = PHASES[4][2]
    parts.append(f'<rect x="{x}" y="{y}" width="{w}" height="{ROW_H}" rx="7" fill="#FFFFFF" stroke="{blue}" stroke-width="1.2"/>')
    parts.append(icon("d", x + w - 12, y + 4, blue))
    parts.append(f'<text x="{x + w/2}" y="{y + 16}" font-size="9" text-anchor="middle" fill="#3C3C3C">WHO SMART guidelines</text>')
    for k, line in enumerate(["Digital", "adaptation", "kits"]):
        parts.append(f'<text x="{x + COL_W/2}" y="{y + 36 + k*11}" font-size="9" text-anchor="middle" fill="#3C3C3C">{line}</text>')
    for k, line in enumerate(["Machine-", "readable", "recommen-", "dations"]):
        parts.append(f'<text x="{x + COL_W + COL_GAP + COL_W/2}" y="{y + 32 + k*10.5}" font-size="9" text-anchor="middle" fill="#3C3C3C">{line}</text>')
    c, r0, r1, lines, icons = THIS
    parts.append(tile(c, r0, r1, lines, icons, HIGHLIGHT, this=True))
    # Legend
    lx, ly = col_x(6) + 8, row_y(5) + 30
    parts.append(f'<rect x="{lx}" y="{ly}" width="{width - lx - 10}" height="34" rx="5" fill="#EEEEEE" stroke="#777777"/>')
    parts.append(icon("d", lx + 10, ly + 6, "#555555"))
    parts.append(f'<text x="{lx + 26}" y="{ly + 14}" font-size="8.5" fill="#444444">PDF for print</text>')
    parts.append(icon("m", lx + 10, ly + 19, "#555555"))
    parts.append(f'<text x="{lx + 26}" y="{ly + 28}" font-size="8.5" fill="#444444">Online environment</text>')
    parts.append("</svg>")
    print("\n".join(parts))


if __name__ == "__main__":
    main()
