#!/usr/bin/env python3
"""Build the dth-hrh ArchiMate overlay from the NHWA work once staged in smart-ra#188.

Owner, 2026-11-01 20:32Z: NHWA does not belong in smart-ra ("close out that
possibility", then "make dth overlay"); a DTH builds an overlay on the smart-ra
model and does not add to it (card Q-RA1 A, 2026-11-01 08:13Z). This copies view
"1. Central Health Workforce Registry" as the source branch drew it, with every
element and relationship it draws. Items smart-ra already holds become reference
copies tagged `overlay:base`, taken from the smart-ra base model itself (so they
keep smart-ra's names, not the branch's relabels); the rest are owned by dth-hrh
and tagged `overlay:owner`. The view gets its own id: it is dth-hrh's view.

usage: extract_overlay.py <source model (.archimate or .xml)> <smart-ra base model>
                          <smart-ra version> <out .archimate>
"""
import copy, sys, zipfile
import xml.etree.ElementTree as ET

XSI = "http://www.w3.org/2001/XMLSchema-instance"
ARC = "http://www.archimatetool.com/archimate"
ET.register_namespace("xsi", XSI)
ET.register_namespace("archimate", ARC)
T = f"{{{XSI}}}type"
SOURCE_VIEW = "1. Central Health Workforce Registry"
VIEW_NAME = "Health workforce registry and NHWA (dth-hrh)"
VIEW_ID = "id-dthhrh-view-hwr-nhwa"
VERSION = "0.1.0-draft.1"


def load(path):
    if zipfile.is_zipfile(path):
        return ET.fromstring(zipfile.ZipFile(path).read("model.xml"))
    return ET.parse(path).getroot()


src_path, base_path, base_ver, out_path = sys.argv[1:5]
src, base = load(src_path), load(base_path)


def index(root):
    by_id, top_type = {}, {}
    for top in root.findall("folder"):
        for el in top.iter("element"):
            by_id[el.get("id")] = el
            top_type[el.get("id")] = top.get("type")
    return by_id, top_type


by_id, top_type = index(src)
base_by_id, _ = index(base)
view = next(e for e in by_id.values() if e.get(T) == "archimate:ArchimateDiagramModel" and e.get("name") == SOURCE_VIEW)

want = set()
for n in view.iter():
    for a in ("archimateElement", "archimateRelationship"):
        if n.get(a):
            want.add(n.get(a))
for i in list(want):  # a relationship needs both ends
    e = by_id[i]
    if e.get("source"):
        want |= {e.get("source"), e.get("target")}

model = ET.Element(f"{{{ARC}}}model", {"name": "DTH-HRH overlay on the DPI-H reference architecture",
                                       "id": "id-dthhrh-overlay-0-1-0-draft-1", "version": "5.0.0"})
doc = ET.SubElement(model, "purpose")
doc.text = (f"Overlay of dth-hrh on smart-ra ArchiMate {base_ver}. Elements tagged overlay:base are reference "
            "copies of smart-ra elements (the IRI names the original); elements tagged overlay:owner=dth-hrh are "
            "added by this DTH (the NHWA work) and are not part of smart-ra. Built by scripts/archimate/extract_overlay.py.")
folders = {}
for top in src.findall("folder"):
    f = ET.SubElement(model, "folder", {"name": top.get("name"), "id": top.get("id"), "type": top.get("type")})
    folders[top.get("type")] = (f, ET.SubElement(f, "folder", {"name": "smart-ra (base, reference copies)",
                                                               "id": top.get("id") + "-base"}))


def tag(e, props):
    pos = next((k for k, c in enumerate(list(e)) if c.tag == "property"), len(list(e)))
    for k, p in enumerate(props):
        e.insert(pos + k, p)


counts = {"owned": 0, "base": 0}
for i in sorted(want, key=lambda i: (by_id[i].get(T), by_id[i].get("name") or "", i)):
    is_base = i in base_by_id
    e = copy.deepcopy(base_by_id[i] if is_base else by_id[i])
    owned_f, base_f = folders[top_type[i]]
    tag(e, [ET.Element("property", {"key": "overlay:base", "value":
            f"https://litlfred.github.io/smart-ra/archimate/{base_ver}/elements/{i}.jsonld"})] if is_base
        else [ET.Element("property", {"key": "overlay:owner", "value": "dth-hrh"})])
    (base_f if is_base else owned_f).append(e)
    counts["base" if is_base else "owned"] += 1

v = copy.deepcopy(view)
v.set("id", VIEW_ID)
v.set("name", VIEW_NAME)
for d in list(v):
    if d.tag in ("documentation", "property"):
        v.remove(d)
docv = ET.Element("documentation")
docv.text = (f"smart-ra {base_ver} view \"{SOURCE_VIEW}\" with the NHWA work that dth-hrh owns: CDE-HWR, the NHWA "
             "Dataset and the four NHWA modules. Drawn as staged in smart-ra#188 (closed: NHWA is not part of smart-ra).")
v.insert(0, docv)
tag(v, [ET.Element("property", {"key": "overlay:owner", "value": "dth-hrh"}),
        ET.Element("property", {"key": "overlay:derived-from", "value":
                   f"https://litlfred.github.io/smart-ra/archimate/{base_ver}/views/{view.get('id')}.jsonld"})])
folders["diagrams"][0].append(v)
for f, b in folders.values():
    if len(b) == 0:
        f.remove(b)
ET.indent(model)
xml = b'<?xml version="1.0" encoding="UTF-8"?>\n' + ET.tostring(model, encoding="utf-8")
with zipfile.ZipFile(out_path, "w", zipfile.ZIP_DEFLATED) as z:
    zi = zipfile.ZipInfo("model.xml", date_time=(1980, 1, 1, 0, 0, 0))
    zi.compress_type = zipfile.ZIP_DEFLATED
    z.writestr(zi, xml)
print(f"{out_path}: {counts['owned']} owned, {counts['base']} smart-ra reference copies, view '{VIEW_NAME}'")
