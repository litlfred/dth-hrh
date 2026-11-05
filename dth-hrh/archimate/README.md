# dth-hrh ArchiMate overlay

A DTH builds an **overlay** on the smart-ra (DPI-H RA) ArchiMate model and does not add to that model (owner, 2026-11-01 08:13Z, card Q-RA1 A). The owner ruled on 2026-11-01 at 20:32Z that the National Health Workforce Accounts (NHWA) work does not belong in smart-ra, so it lives here. smart-ra#188, which staged it for smart-ra's architect committee, is closed.

| Version | File | Overlays smart-ra |
|---|---|---|
| 0.1.0-draft.1 | [`0.1.0-draft.1/dth-hrh-overlay.archimate`](0.1.0-draft.1/dth-hrh-overlay.archimate) | 0.2.0 |

Each element carries one of two tags:

- `overlay:base`: a reference copy of a smart-ra element or relationship, under the same id and with smart-ra's name, with its smart-ra IRI as the value (`…/elements/<id>.jsonld` or `…/relationships/<id>.jsonld`). It is there only so the overlay's view can draw it.
- `overlay:owner` = `dth-hrh`: an element this DTH adds: CDE-HWR (the registry's core data elements), the NHWA Dataset, the four NHWA modules, the subnational density indicators, and their relationships. The folio links them with `https://litlfred.github.io/dth-hrh/archimate/<version>/elements/<id>.jsonld` IRIs.

The view "Health workforce registry and NHWA (dth-hrh)" is smart-ra 0.2.0's view "1. Central Health Workforce Registry" as smart-ra#188 drew it, with the NHWA work. It has its own id, and `overlay:derived-from` names the smart-ra view.

A second view, "NHWA on the health workforce registry (poster, dth-hrh)", shows the same NHWA items as bands of cards with no lines: NHWA modules and indicators, data, and applications. `archimate-blocks` draws it as a poster into `folio/dth-hrh/media/nhwa-poster.svg`, which is figure `fig:nhwa-poster` in 7.5 Analytics (`figures` in `cat-archimate.config.json`). Rebuild with `bun run cat archimate:blocks --instance .`.

`scripts/archimate/extract_overlay.py` builds 0.1.0-draft.1 from the model on smart-ra branch `claude/nhwa-committee-review` (#188) and smart-ra's 0.2.0 model:

```sh
git -C <smart-ra clone> show origin/claude/nhwa-committee-review:archimate/0.2.0/WHOBaseFile.archimate > /tmp/nhwa.archimate
python3 scripts/archimate/extract_overlay.py /tmp/nhwa.archimate dpi-h-ra/archimate/0.2.0/WHOBaseFile.archimate 0.2.0 archimate/0.1.0-draft.1/dth-hrh-overlay.archimate
```

Not yet checked here: that an `overlay:base` copy names something smart-ra holds and that an owned element is not also in smart-ra. dth-phc runs those checks in its own validator. The shared validator in folio-assistant-core does not yet run them, so for now they are a review step.

`bun run check:dth-glossary` (core's shared checker, from folio-assistant-core#570) checks these tags: every copy names an item smart-ra 0.2.0 holds under the same id, and no owned item is in smart-ra 0.2.0.
