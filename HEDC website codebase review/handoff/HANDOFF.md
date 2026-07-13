# HEDC Website Redesign — Handoff Spec

**Design source of truth** for the Hope Essence Dental Clinic site.
Rebuild these pages in the existing Astro project (`Amesi/hedc-website`, hosted on Cloudflare).

- `hedc-redesign.html` — self-contained visual reference (open in any browser, works offline). This is the design to match, **not** production Astro code.
- All five pages are stacked in one scroll for review; in production they stay as separate routes (`/`, `/services`, `/about`, `/contact`, `/book`).

---

## Brand tokens

| Role | Hex |
|---|---|
| Primary (Gold) | `#F4BE0C` |
| Primary Dark (hover) | `#C99A06` |
| Primary Light (tint bg) | `#faf3e0` |
| Hero tint | `#fdf8ec` |
| Text (headings) | `#4a4a4a` |
| Text muted (body) | `#7a7a7a` |
| Text on gold buttons | `#3a2f08` |
| Surface / section alt | `#f8f5ec` |
| Border | `#ece6d8` |
| Top bar + Footer | `#333333` |
| WhatsApp (functional only) | `#1faf6f` |

**Type:** Headings — `Playfair Display` (serif, weight 400/600). Body — `Inter`.
Scale: hero ~60px → section titles ~40px → body 16–18px → captions 12.5–14px.

**Buttons:** gold `#F4BE0C` fill with dark `#3a2f08` text (not white — contrast). Pill or 12px radius. Ghost = white fill, `#e5e7eb` border.

**Logo:** currently a gold circle "H" monogram + charcoal "Hope Essence / Dental Clinic" wordmark. **Replace with the real HEDC tooth logo when available** (nav + footer).

---

## Pages & content

**Home** — Hero ("Your smile, our passion."), trust strip (5 signals), 6-service preview grid, "Why Hope Essence" 4-point grid, charcoal CTA band.

**Services** — All 10 services, price + duration, in a 2-col grid. Buai Stain Removal flagged as "PNG favourite".

**About** — Clinic story, 3 dentist cards (Dr. Ben Kila – Principal; Dr. Mary Waide – Dentist; Dr. James Kuman – Dental Surgeon), 3 values (Compassion, Honesty, Community).

**Contact** — Call (3 lines), email, address, hours, map placeholder, WhatsApp band.

**Book** — 3 methods (WhatsApp [recommended], Call, Walk-in) + 4-step "What to expect".

### Service pricing
| Service | Price | Duration |
|---|---|---|
| General Check-up | K150 | 30 min |
| Teeth Cleaning (Scale & Polish) | K200 | 45 min |
| Tooth Filling | K250 | 45 min |
| Tooth Extraction | K200 | 30 min |
| Root Canal Therapy | K800 | 90 min |
| Teeth Whitening | K500 | 60 min |
| Crown & Bridge | K1,200 | 90 min |
| Implant Consultation | K300 | 45 min |
| Buai Stain Removal | K180 | 45 min |
| Children's Dentistry | K120 | 30 min |

### Contact details
- GB Haus, Office 17, Kunai Street, Section 5, Lot 225, Hohola, Port Moresby
- +675 7835 2045 · +675 7189 4912 · +675 7292 8301
- hopeessencedentalclinic@gmail.com · hedc.kumi-tech.com
- Mon–Fri 8am–5pm · Sat 8am–1pm · Sun closed

---

## Notes for implementation
- Image placeholders (striped blocks with mono captions) mark where real clinic photos go — dentist/patient hero, team photo, 3 dentist portraits, reception, map embed.
- Icons are simple inline SVG (stroke `#F4BE0C`); swap for the project's icon set if preferred.
- Nav is sticky; scroll-based in the reference. In Astro use normal route links.
- Keep WhatsApp green only on actual WhatsApp actions; everything else is gold/charcoal.
