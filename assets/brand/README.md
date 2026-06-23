# Brand assets

Drop the official Vila do Paraíso brand files here. The design system in
[`../../docs/04-look-and-feel.md`](../../docs/04-look-and-feel.md) references this folder.

## The logo

The existing logo is a **badge**: two palm silhouettes, a golden rising sun, a pale-aqua sky
dome, beach grass and three birds, over a hand-drawn banner reading **VILA DO PARAISO** /
**MOÇAMBIQUE**.

**Brand colours** — sampled directly from `VDP-LOGO.jpg` (source of truth):

| Name | Hex | Where |
|---|---|---|
| Palm Charcoal | `#3E3432` | palms, lettering, line work |
| Sun Gold | `#FAC926` | the sun |
| Sky Aqua | `#C0E8F0` | the sky dome (→ white gradient) |

## Files to add

| File | Why | Status |
|---|---|---|
| `VDP-LOGO.jpg` | Official full badge (raster, white bg) — from the owner's Drive | ✅ **in repo** |
| `logo.svg` | **Vector trace of the real badge** — transparent bg, scalable; primary site mark | ✅ **in repo** (traced) |
| `logo-transparent.png` | Transparent-background raster of the badge | ✅ **in repo** |
| `logo-master.ai` / `.eps` | Original *editable* vector for print | ⏳ nice-to-have from owner |
| `logo-reverse.svg` | Brand-approved white/reverse version for dark backgrounds | ⏳ to create |
| `logo-reverse-white.png/svg` | Single-colour white knockout for the dark footer & over photos | ⏳ to create from master |
| `logo-roundel.svg` / `.png` | Simplified palm-and-sun mark for header / avatar | ✅ **draft in repo** (interpretive) |
| `favicon.svg` + `favicon-32/180/512.png` | Browser tab + Apple touch + PWA icon | ✅ **draft in repo** (interpretive) |
| `wordmark.svg` | "VILA DO PARAÍSO" in the brand serif, for tight spaces | ⏳ to commission |

### About the drafts in this folder
`logo-roundel.*` and `favicon.*` are **interpretive recreations** I built by hand to capture
the badge's motif (two palms, sun, sky dome, birds, ring) in a clean form that reads at small
sizes — so the site has a working header mark and favicon today. They are **not** traced from
the official artwork. Once the **official vector master** lands here, treat it as the source of
truth: regenerate/redraw the roundel from it, and confirm the exact hex values.

## How to get the files in

I'm running in a remote container and **can't read your computer's desktop or pull an image
out of the chat**. Easiest paths:

1. **Google Drive** — drop the file(s) anywhere and tell me the name; I'll fetch and commit them.
2. **Commit directly** to branch `claude/sleepy-archimedes-vaeq54`.

Once the master is here, I'll confirm the exact hex values and lock them into the design tokens.
