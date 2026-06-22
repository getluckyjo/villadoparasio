# 02 — Development Strategy

How we build the Vila do Paraíso website: the stack, the booking engine for **rooms +
meals + activities**, the information architecture, and a phased roadmap from "live and
beautiful" to "books itself."

---

## 1. Guiding principles

1. **Photography-led, fast, mobile-first.** Most guests will browse on a phone in bed.
   Big imagery, instant load, thumb-friendly booking.
2. **Direct booking is the goal.** Every OTA commission we avoid is margin. The site must
   be the best *and* cheapest place to book.
3. **Sell the experience, then take the money in the same breath.** No dead-ends between
   "I want this" and "it's booked."
4. **Low operational overhead.** The owners run a lodge, not a software team. Favour
   managed, proven tools over bespoke code we'd have to maintain.
5. **Built to grow.** Start lean; the architecture must absorb full board, activities,
   multiple villas, and seasonal rates without a rebuild.

---

## 2. Recommended stack

### Front end / site
**Recommendation: Astro (or Next.js) static-first site, headless CMS for content.**

| Layer | Recommendation | Why |
|---|---|---|
| **Framework** | **Astro** (preferred) or Next.js | Astro ships near-zero JS by default → very fast, perfect for a content/photo site; drop in React "islands" only where booking widgets need interactivity. Next.js is the fallback if the team prefers a single React app. |
| **CMS** | **Sanity** or **Storyblok** (headless) | Owners/marketing edit villas, rates, menus, activities, journal posts without a developer. Visual editing. |
| **Styling** | Tailwind CSS + design tokens from [`04-look-and-feel.md`](04-look-and-feel.md) | Fast, consistent, maps 1:1 to the design system. |
| **Hosting** | **Vercel** or **Netlify** | Global CDN, instant deploys, generous free/low tiers, image optimisation built in. |
| **Images** | CMS-native CDN + responsive `srcset`, AVIF/WebP | Hero imagery must be gorgeous *and* fast. Lazy-load below the fold. |
| **Forms/enquiry** | Native + email (Resend/Postmark) | Even with online booking, keep a human "plan my stay" enquiry path for whole-villa/group deals. |

> **No-code alternative (if speed-to-launch beats flexibility):** Webflow for the site +
> an embedded booking engine (below). Faster to launch, less developer dependency, but
> weaker for complex rate logic and long-term cost. Given the full-board + activities
> ambition, **the headless build is the better long-term call**; Webflow is a valid
> Phase-1 shortcut if budget/time is tight.

### Booking engine — the important decision

We need **three** things bookable online: **accommodation, meals (full board / add-ons),
and activities.** No single tool does all three beautifully, so the recommendation is a
**best-of-breed pairing**, integrated behind one clean UX.

#### A. Accommodation + full board → **PMS + booking engine**
**Recommendation: Lodgify** *(best fit for a small villa property)*, with **Cloudbeds**
as the step-up alternative.

| Option | Best for | Notes |
|---|---|---|
| **Lodgify** ✅ | Villa/vacation-rental model, whole-property bookings, direct-booking website tools, channel manager to sync Booking.com/Airbnb | Purpose-built for exactly our shape (6 villas, whole-villa lets). Commission-free direct bookings. Add-ons feature can carry full board + extras. |
| **Cloudbeds** | If we grow toward room-by-room hotel-style selling, deeper revenue management | More hotel-oriented, slightly heavier. Strong channel manager. |
| **Newbook / Little Hotelier** | Budget alternatives | Viable but weaker brand/UX fit. |

**Full board handling:** model full board as the **default rate plan** (price includes
meals) with an optional self-catering/B&B plan if ever needed. Sell premium dining
moments (private dune dinner, beach braai) as **booking add-ons / extras**.

#### B. Activities → **dedicated experiences booking tool**
**Recommendation: FareHarbor** or **Checkfront** (tours & activities), embedded on the
site.

These handle the things a PMS handles badly: **time slots, capacity, per-person pricing,
seasonality, weather/tide rescheduling, waivers** — for fishing charters, dives, snorkel
trips, island hops, dune picnics, township food tours.

> **Big advantage: the property owns 2 catamarans.** Fishing and island-hopping run on
> *in-house* boats, so the activities engine manages **owned inventory** (two vessels, their
> capacity and daily slots) rather than reselling third-party operators. That means cleaner
> margins, real-time availability we control, and an easy cross-sell from the stay booking.
> Model each catamaran as a bookable resource with capacity + time slots in FareHarbor/Checkfront.

| Option | Best for |
|---|---|
| **FareHarbor** ✅ | Mature tours/activities engine, great mobile checkout, no monthly fee (takes a small booking fee), strong for charters & timeslot inventory |
| **Checkfront** | Flexible, good for mixed inventory & resource management |
| **Bókun** (Tripadvisor) | If we want activity distribution/resale via OTAs too |

#### C. Stitching it into one experience
- **Phase 1:** embed both engines (Lodgify booking + FareHarbor activity widgets) behind a
  single, on-brand "Stay / Eat / Do" booking section. Visually unified even if two engines
  under the hood.
- **Phase 2:** add a "**Plan your stay**" basket UX in the React/Astro layer that lets a
  guest assemble villa + board + activities, with the engines as the source of truth via
  their APIs (both Lodgify and FareHarbor expose APIs/webhooks).
- **Payments:** Stripe and/or PayFast (PayFast matters for the **South African** market and
  ZAR; Stripe for international cards). Confirm what the chosen PMS supports for **MZN/ZAR/USD**.

> **Why not fully custom from day one?** A bespoke booking engine for rooms + meals +
> activities is months of build and a permanent maintenance burden for a 6-villa property.
> We get 90% of the value, and launch far sooner, by pairing proven tools and owning only
> the *presentation* layer. Re-evaluate a custom basket once volumes justify it (Phase 3).

---

## 3. Information architecture (sitemap)

```
/                        Home — the five pillars + the open door to Bazaruto
/villas                  The Villas — overview, whole-villa story, floorplan, sleeps 8
  /villas/[name]         Individual villa (if sold separately)
/full-board              The Table — full board, the chef, sample menus, the 2M sunset
/experiences             Do — the activities hub
  /experiences/fishing       World-class fishing (species, seasons, boats)
  /experiences/diving-snorkelling   Two Mile Reef, reef & marine life
  /experiences/island-hopping       Bazaruto archipelago, dhow, catamaran
  /experiences/dune-picnic           Picnic on the dunes
  /experiences/township-food-tour    Vilanculos food & culture tour
/family                  The Ultimate Family Holiday (butler, chef, safe sea, kids)
/getting-here            1 hour from Joburg — flights, transfer, map, FAQs
/journal                 Stories/blog — SEO + soul (the 2M-flavoured editorial)
/about                   The place, the people, the philosophy
/contact + /plan-your-stay   Enquiry for whole-villa & group bookings
/book                    The booking hub (Stay / Eat / Do)
```

### Navigation (primary)
`Villas · The Table · Experiences · Family · Getting Here · Book`

---

## 4. SEO & discoverability

- **Name strategy:** brand and `<h1>` use **Vila do Paraíso**; include **"Villa do Paraiso"**
  in `<title>`, meta description, alt text, and a schema `alternateName`, plus
  "Vilanculos / Vilankulo" and "Bazaruto" so we catch every spelling. The town appears as
  both *Vilanculos* and *Vilankulo* — use both.
- **Consolidate authority:** the goal is to outrank the scattered Booking.com / Hotels.com /
  TripAdvisor / agent listings for branded search. Claim/link the Google Business Profile.
- **Schema.org:** `LodgingBusiness` / `Resort`, `Offer`, `TouristAttraction` for activities,
  `FAQPage`, geo-coordinates for Mahaque Beach.
- **Local + intent keywords:** "Vilanculos accommodation," "Bazaruto fishing charter,"
  "Vilanculos family villa," "Mozambique full board villa," "1 hour from Joburg beach."
- **Performance = SEO:** Core Web Vitals green. Astro's static output + image CDN handles
  most of this for free.
- **Multilingual (later):** English first; Portuguese and Afrikaans as Phase-3 nice-to-haves.

---

## 5. Analytics, trust & comms

- **Analytics:** GA4 + a privacy-light option (Plausible/Fathom). Track funnel: view →
  enquiry/booking start → booking complete; activity attach rate.
- **Reviews:** surface TripAdvisor / Google ratings on site (the property already rates ~4/5,
  #5 of 22 in Vilanculos — show it).
- **Transactional email/WhatsApp:** booking confirmations, pre-arrival "meet your butler &
  chef" message, activity reminders. **WhatsApp is the dominant channel in this market** —
  add a WhatsApp enquiry/booking-assist button.
- **Consent/cookies:** lightweight banner; comply with POPIA (SA) for the SA audience.

---

## 6. Phased roadmap

### Phase 0 — Foundations *(this repo)*
Brand, copy, design system, image plan. ✅ (delivered here)

### Phase 1 — Launch the brochure that converts *(MVP)*
- Astro site, headless CMS, full design system, real photography.
- All content pages (villas, table, experiences, family, getting here).
- **Booking v1:** embedded Lodgify (stay + full board) and FareHarbor (activities) widgets;
  WhatsApp + enquiry form; Stripe/PayFast.
- Channel manager syncing Booking.com so the website becomes the cheapest direct option.
- **Goal:** beautiful, fast, and able to take a real booking.

### Phase 2 — One basket, end to end
- Unified "Plan your stay" UX assembling villa + board + activities via engine APIs.
- Dynamic/seasonal rates, full-board as default, premium dining add-ons.
- Journal/SEO content engine live; review surfacing; abandoned-enquiry follow-up.

### Phase 3 — Optimise & extend
- Portuguese/Afrikaans; loyalty/returning-guest offers; gift vouchers.
- Revenue management; consider custom basket if volume justifies.
- Possible PWA/offline-friendly behaviour for low-connectivity guests on arrival.

---

## 7. Decisions still needed from the owners

These don't block the docs but are needed before **Phase 1 build**:

1. **Budget & timeline** for the build (decides headless-build vs. Webflow shortcut).
2. **Rate card** for full board (per villa / per person, by season) — needed to configure
   the booking engine.
3. **Whole-villa vs. per-room selling** — sell only whole villas (8 sleepers) or also rooms?
   (Affects PMS config and IA.)
4. **Activity operations** — which fishing/dive operators, capacities, and prices feed the
   activities engine? Owned boats or partners?
5. **Payment & currency** — accept ZAR (PayFast), USD, MZN? Deposit policy & cancellation terms.
6. **Existing assets** — logo files, any professional photography, the Booking.com listing
   login (to reclaim/redirect that traffic), domain control for `viladoparaiso.com`.
7. **Who maintains content** post-launch (sets how "no-code-friendly" the CMS must be).
