# 04 — Look & Feel (Design System)

The visual language for Vila do Paraíso: **barefoot luxury — intentionally simple, so
nature shines**, warmed by the soul of a cold 2M at sunset. Restraint from Kisawa, story
and photography from Perfect Hideaways, colour and pride from Mozambique itself.

---

## 1. Design principles

1. **Let nature be the hero.** Photography fills the frame; design gets out of the way.
   White space is a feature, not a gap.
2. **Barefoot, not bare.** Simple and uncluttered, but warm and tactile — natural texture,
   soft edges, hand-made touches. Never cold or minimalist-corporate.
3. **Earned luxury.** Generous spacing, beautiful type, and quiet confidence signal premium —
   *not* gold, gloss, or ornament.
4. **Mozambican soul, used with respect.** The 2M-inspired red/gold/star and capulana colour
   appear as *accents and moments* — a flash of joy — never as wallpaper or cliché.
5. **Fast and mobile-first.** It must feel effortless on a phone on slow signal. Beauty that
   loads instantly.

**The feeling in one line:** *sun-bleached, salt-aired, hand-made, unhurried — with one warm
flash of celebration.*

---

## 2. Colour palette

A grounded, natural base (sand, shell, ocean, palm) with a single warm, celebratory accent
family drawn from 2M and the Mozambican coast. **Roughly 80% neutral, 15% deep ocean, 5%
warm accent.**

### Source of truth — the logo colours
The existing **Vila do Paraíso logo** sets three non-negotiable brand colours. The web
palette below is built to *harmonise* with these, not fight them:

| Token | Name | Hex (sampled from the official logo) | In the logo |
|---|---|---|---|
| `--ink` | Palm Charcoal | `#3E3432` | Palms, lettering, all line work — warm near-black |
| `--sun` | Sun Gold | `#FAC926` | The rising sun |
| `--aqua` | Sky Aqua | `#C0E8F0` | The sky dome (pale, gradient to white) |

> Use **Palm Charcoal `--ink`** as the primary text/line colour everywhere (it matches the
> logo exactly and reads warmer than a cold black). **Sun Gold** is the brand's hero warm
> accent — it ties the 2M "sunset" idea straight to the logo's sun. **Sky Aqua** is a soft
> tint for backgrounds, the ocean, and hover states. These three are sampled directly from the
> official logo file (`/assets/brand/VDP-LOGO.jpg`) and are the source of truth.

### Neutrals — the canvas (use most)
| Token | Name | Hex | Use |
|---|---|---|---|
| `--shell` | Shell White | `#F6F1E7` | Primary background, "the calm" |
| `--sand` | Mahaque Sand | `#E7DAC4` | Secondary background, cards, bands |
| `--driftwood` | Driftwood | `#BCA98C` | Borders, muted detail, dividers |
| `--clay` | Warm Clay | `#9C7E5E` | Tertiary text, captions, earthy detail |

### Deep — the ocean & ink (anchor & text)
| Token | Name | Hex | Use |
|---|---|---|---|
| `--ink` | Palm Charcoal | `#3E3432` | **Primary text & line colour** (matches the logo) |
| `--indigo` | Dhow Indigo | `#1E3A4C` | Deep-ocean backgrounds, footer, dark sections |
| `--tide` | Tidewater Teal | `#2E6E66` | Secondary deep, links, calm accent |
| `--palm` | Casuarina Green | `#4A5D3A` | Natural/eco accent, subtle |

### Warm accent — the sun & the 2M flash (use sparingly, 5%)
| Token | Name | Hex | Use |
|---|---|---|---|
| `--sun` | Sun Gold *(logo)* | `#FAC926` | Hero warm accent — the logo's sun, highlights, hover |
| `--sunset` | 2M Sunset Red | `#C0392B` | Primary CTA, the star mark, moments of joy |
| `--amber` | Mukwa Amber | `#C9962E` | Deeper gold companion to Sun Gold, gradients |
| `--coral` | Capulana Coral | `#E2725B` | Soft warm accent, illustration, tags |

> **Reconciling logo vs. system:** the logo is *sunnier and friendlier* than a pure
> Kisawa-muted palette — which actually serves the brief's "down-to-earth, 2M flavour" side.
> So we tune the system **slightly warmer and brighter** than ultra-muted, and keep it feeling
> elevated through restraint: lots of white space, refined type, and the warm colours used as
> *flashes*, not fields. Sun Gold (logo) and 2M Sunset Red are cousins — gold for warmth and
> highlights, red reserved for the primary call-to-action.

> **Accessibility:** body text in `--indigo` on `--shell`/`--sand` for AA+. `--sunset` is for
> buttons and small marks, not long text. Always test CTA contrast against its background.

### Suggested usage ratios
- Backgrounds: Shell / Sand alternating bands.
- Text: Dhow Indigo (headings + body), Warm Clay (captions/meta).
- Links/quiet interaction: Tidewater Teal.
- Primary action / brand spark: 2M Sunset Red, with Amber on hover.

---

## 3. Typography

The Perfect-Hideaways / Kisawa editorial feel = a **warm display serif** for emotion, a
**clean humanist sans** for clarity.

### Recommended pairing (premium)
- **Display / headings:** **Canela**, **Ogg**, or **Reckless** — high-contrast, elegant,
  slightly literary serif. Big, confident, lots of air.
- **Body / UI:** **Söhne**, **Aktiv Grotesk**, or **Neue Haas** — neutral humanist sans.

### Recommended pairing (open-source / no-licence — safe default for build)
- **Display / headings:** **Fraunces** (soft, warm, "old-style" serif with optical sizing).
- **Body / UI:** **Inter** or **General Sans**.
- **Accent (very sparing):** a hand-painted / brush face for the occasional flourish
  (e.g. *paraíso* signature, a "Bem-vindo") — think hand-lettered, like a beach-bar sign.
  Use once per page at most.

### Type scale & rules
- Display headlines: large, tight leading, generous margins. Sentence case, not ALL CAPS.
- Small eyebrows/labels: uppercase, wide letter-spacing, Warm Clay — sparing.
- Body: 17–19px, relaxed line-height (1.6), max ~66 characters per line.
- Never more than two type families on screen (plus the rare accent flourish).

---

## 4. The 2M-inspired accent system (artistic flavour)

This is how we bring **Mozambican soul** in *artistically*, not literally — the brief's
"2M flavour, done with taste."

- **The star.** 2M and Mozambique both carry a star. Use a **simple hand-drawn five-point
  star** as a small recurring brand mark — section dividers, list bullets, the favicon's
  cousin, a "you've reached the end" flourish. Subtle, in Amber or Sunset Red.
- **Capulana colour, not capulana print.** Borrow the *joy and palette* of capulana cloth —
  warm reds, golds, corals, teals — as occasional **colour blocks, edges, and illustration
  fills**, not as busy pattern behind text. A single thin capulana-inspired stripe can edge a
  footer or a "The Table" section.
- **The sundowner moment.** One section per key page earns the warm palette: the 2M-cold-at-
  sunset ritual. Everywhere else stays sand-and-ocean calm. The contrast is the point.
- **Hand-made marks.** Rough painterly edges, a brush underline under a key word, a
  hand-drawn wave or dhow — tiny imperfect human touches against clean type.
- **Respect line:** never use 2M's actual logo/trademark or imply endorsement. We evoke the
  *culture and the colour*, not the brand asset.

---

## 5. Photography & art direction

Photography *is* the design. Direction:

- **Natural light, real moments.** Golden hour, soft overcast, the blues of midday water.
  Avoid over-saturated, HDR, "travel-brochure" looks.
- **Barefoot and human.** Sand on feet, a hand on a fishing rod, kids mid-jump into the pool,
  a chef plating on the deck. People at ease, not posing.
- **Let it breathe.** Wide, calm, lots of sky and water. Negative space for type to sit in.
- **Texture & detail close-ups.** Thatch, weathered wood, a cold beaded 2M, fresh fish on ice,
  coral, capulana cloth, the grain of the dunes. These carry the "hand-made" feel.
- **The hero set we must get** (see [`05-image-and-moodboard.md`](05-image-and-moodboard.md)
  for the full shot-list): villa-on-beach at golden hour; private pool + deck + ocean; the
  archipelago from the air; a marlin/charter moment; Two Mile Reef underwater; a dune picnic;
  chef + table on the sand; sundowners.
- **Colour grade:** warm, slightly faded, true-to-life. A consistent LUT across the site so
  every image feels of one place.

---

## 6. Layout & components

### Grid & space
- 12-column responsive grid; wide max-width (~1280–1440px) with generous gutters.
- **Lots of white space.** Sections breathe. Don't fill every band.
- Mobile-first: single column, large tap targets, sticky lightweight nav.

### Signature layouts
- **Full-bleed hero** image with minimal overlaid type and two clear CTAs.
- **Alternating story bands:** image one side, short copy + single CTA the other; alternate
  Shell/Sand backgrounds down the page.
- **Pillar cards:** the five pillars as clean cards with a single line + link.
- **Editorial "journal" layout** for stories (Perfect Hideaways feel): big image, serif
  headline, readable measure.

### Components
- **Buttons:** primary = 2M Sunset Red, generous padding, soft-rounded (not pill, not sharp);
  hover → Amber. Secondary = outline in Dhow Indigo. Text links underline on hover in Tidewater.
- **Cards:** Sand on Shell (or vice-versa), soft shadow, rounded ~12px corners, image top.
- **Nav:** transparent over hero, solidifying to Shell on scroll; `Book` button always Sunset Red.
- **Dividers:** thin Driftwood rule, occasionally centred with the little star mark.
- **Forms/booking widgets:** clean, Shell background, Indigo labels, Sunset Red submit.
  Style embedded Lodgify/FareHarbor widgets to match tokens as far as each allows.
- **WhatsApp button:** persistent, friendly, bottom-right on mobile.

### Motion
- Quiet and natural: gentle fades and slow parallax on hero imagery. Nothing bouncy or
  flashy. Respect `prefers-reduced-motion`.

---

## 7. Iconography & marks

- **Line icons,** thin and hand-feel rather than geometric-perfect: fish, mask & snorkel,
  dhow, palm, pool, star, plate, plane.
### Logo (existing mark)

**What we have:** a full **badge logo** — two palm silhouettes, a golden rising sun, a
pale-aqua sky dome, beach grass and three birds, over a hand-drawn banner reading
**VILA DO PARAISO** with **MOÇAMBIQUE** beneath. Warm, friendly, recognisable, and already
carrying real review equity (9.3/10). Colours: Palm Charcoal, Sun Gold, Sky Aqua on white.

**The tension to manage:** it's an *illustrative/literal* badge — closer to "friendly
tropical holiday" than the pared-back "barefoot-luxury" editorial of the reference sites — and
it's detail-heavy, so it won't read cleanly at small sizes (site header, favicon, social avatar).

**Recommended approach — keep the equity, add range (a small logo *system*):**
1. **Primary badge** — the existing full logo. Use it big and with breathing room: hero,
   footer, print, signage, the about page. Don't shrink it below ~140px wide.
2. **Secondary mark (commission)** — a *simplified* version distilled from the same artwork:
   the **palm-and-sun roundel only**, no banner, for the sticky site header, favicon, app icon
   and social avatar. Reads at 32px.
3. **Wordmark (commission)** — **VILA DO PARAÍSO** set in the brand display serif, clean, for
   tight horizontal spaces and email signatures.
4. **Reverse versions** — single-colour Shell/white version of all three for the dark indigo
   footer and over photography. (The current badge needs a knockout/reverse variant.)
5. **Light refinement (optional, recommended)** — keep every motif (palm, sun, birds, banner —
   they're strong and ownable), but a designer redraw could tighten the line weights, refine the
   lettering, and align the sun gold/aqua to the exact tokens. Evolution, not revolution — we
   protect the recognition while lifting it toward "barefoot luxury."

> **Do not** redraw or replace the logo without owner sign-off — it has equity. The above is a
> *system around* it, not a rebrand.

**Now in the repo:** the badge has been **vector-traced to a clean, transparent-background SVG**
(`/assets/brand/logo.svg`, also `/public/logo.svg`) — pixel-faithful to the original artwork and
infinitely scalable. It is wired into the **site header** as the primary mark. The simplified
**roundel** and **favicon** remain for small sizes (footer mark / browser tab) where the detailed
badge can't read. Still nice-to-have from the owner: the *original editable* vector
(`.ai`/`.eps`) for print, and a brand-approved **reverse/white** version for dark backgrounds.

---

## 8. Tone of imagery + copy together (the "feel" test)

A page is "on brand" if it feels like: **a warm, unhurried, slightly hand-made postcard from
a beautiful coast — calm sand-and-ocean throughout, with one honest flash of red-gold
celebration, and a real human being just out of frame who has already taken care of everything.**

If a layout feels glossy, busy, corporate, or like it's *trying* — strip it back. Intentionally
simple. So nature shines.

---

## 9. Quick reference — design tokens (for Tailwind/CSS)

```css
:root {
  /* brand — sampled from the official logo (source of truth) */
  --ink:       #3E3432; /* Palm Charcoal — primary text & line colour */
  --sun:       #FAC926; /* Sun Gold — hero warm accent */
  --aqua:      #C0E8F0; /* Sky Aqua — soft tint / ocean */
  /* neutrals */
  --shell:     #F6F1E7;
  --sand:      #E7DAC4;
  --driftwood: #BCA98C;
  --clay:      #9C7E5E;
  /* deep */
  --indigo:    #1E3A4C;
  --tide:      #2E6E66;
  --palm:      #4A5D3A;
  /* warm accent — the 2M flash */
  --sunset:    #C0392B;
  --amber:     #C9962E;
  --coral:     #E2725B;

  --font-display: "Fraunces", Georgia, serif;     /* or Canela/Ogg (licensed) */
  --font-body:    "Inter", system-ui, sans-serif; /* or Söhne (licensed) */

  --radius: 12px;
  --maxw:   1400px;
}
```
