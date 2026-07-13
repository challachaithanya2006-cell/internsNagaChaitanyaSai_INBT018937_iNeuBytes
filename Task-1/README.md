# CuraLife — Healthcare & Clinic Landing Page

A premium, single-page healthcare/clinic website built for the iNeuBytes Web Development Internship (Task-1).

**Live sections:** Hero · About · Services · Why Choose Us · Doctors · Statistics · Appointment Form · Testimonials · FAQ · Contact · Google Map · Footer

## Stack
Plain HTML5, CSS3, and vanilla JavaScript. No frameworks, no build step, no dependencies. Open `index.html` in a browser and it runs.

## Folder Structure
```
Task-1/
├── index.html
├── assets/
│   ├── css/style.css
│   ├── js/script.js
│   ├── images/        (empty — see "On images" below)
│   └── icons/favicon.svg
└── README.md
```

## Design system
- **Colors:** Emerald `#10B981` / Dark Emerald `#047857` / Gold `#F59E0B`, on a warm off-white `#FAFAF7`, per brand brief. No blue anywhere.
- **Type:** Poppins for headings, Inter for body text.
- **Spacing:** 8px base scale (`--sp-1` … `--sp-9` in `style.css`).
- **Radius:** 12–20px, soft shadows, no hard borders.

## On images
Doctor avatars, the hero illustration, and all icons are hand-built inline SVG rather than stock photography. This was a deliberate choice, not a placeholder shortcut: it keeps the page at zero external image requests (fast load, nothing to break), avoids using photos of real strangers for a fictional clinic, and lets every icon inherit the brand's colors via `currentColor`. `assets/images/` is kept per the required folder structure in case real photography is swapped in later.

## What's intentionally *not* here
Per design review, the build was deliberately kept lean rather than maximalist:
- One hero visual (illustration + a single floating confirmation card), not multiple competing elements.
- No auto-scrolling logo marquee, animated background blobs, orbit rings, or floating particles.
- Every statistic (patients, doctors, years, rating, satisfaction) appears exactly once across the whole page.
- One consistent "Book Appointment" CTA pattern, reused with purpose (nav, hero, per-doctor card, form) rather than duplicated decoratively.
- Only 5 animation types are used anywhere: fade-in on scroll, counter count-up, button hover, card hover, and smooth scroll.

## Functionality notes
- **Appointment form** validates name, email, phone, date, department, and doctor client-side (`script.js`) and swaps in a success panel — no backend, no real submission, this is a front-end-only demo.
- **Doctor → Department mapping** is real: choosing a department filters the doctor dropdown; clicking "Book Appointment" on a doctor card pre-fills both fields and scrolls to the form.
- **Google Map** embeds Vijayawada, Andhra Pradesh via the no-API-key `output=embed` pattern.
- All contact details (address, phone, email) are fictional/illustrative for this clinic concept.

## Accessibility
Skip-to-content link, semantic landmarks, visible focus states, `aria-expanded`/`aria-controls` on the FAQ accordion and mobile menu, `prefers-reduced-motion` respected, all icons marked `aria-hidden` (decorative) with real labels on interactive controls.