# Kraft Technology Group — Website Project

## Project Overview

Kraft Technology Group is a technology solutions provider serving businesses,
homes and industries. Services include IT support, cybersecurity, cloud
management, IT consulting, web development, and home/industry solutions.

This project delivers a five-page informational website designed to establish
Kraft Technology Group's online presence, build credibility with potential
clients, and generate qualified leads through a free assessment enquiry form.

The website is built with pure HTML only no CSS, no JavaScript, and no
external dependencies. This ensures maximum cross-browser compatibility and
instant loading on any device.
**UPDATE PART 2**
As of Part 2, the website now uses a **separate external stylesheet** (`style.css`)
linked from every HTML page. The HTML structure remains semantic and
JavaScript-free, while the CSS handles all presentation, layout and responsive
behaviour.

**Project Status:** Part 1 complete (HTML pages built)
---
**Project Status:** Part 2 complete (CSS styling added)

### Primary Goals

1. **Establish credibility** — Position Kraft Technology Group as a trustworthy,
   transparent IT partner rather than another unknown vendor.
2. **Generate leads** — Provide clear pathways for small business owners to
   request a free assessment or consultation.
3. **Improve local search visibility** — Create a presence for location-specific
   queries such as "IT support Katlehong" or "cybersecurity East Rand".
4. **Differentiate from competitors** — Speak directly to the real fears and
   frustrations of small business owners: downtime, uncertainty, and being
   sold to rather than helped.

### Key Performance Indicators (KPIs)

| KPI | How It Is Measured |
|-----|-------------------|
| Enquiry form submissions | Number of completed forms on `enquiry.html` |
| Phone enquiries | Calls to the number listed on `contact.html` |
| Organic search traffic | Visits from search engines for local IT queries |
| Time on service pages | How long visitors spend on `service.html` |
| Bounce rate on homepage | Percentage of visitors leaving without navigating further |

### Target Audience

- Small and midsize businesses without in-house IT expertise
- Homeowners needing network or device support
- Industrial clients requiring on-site technical solutions
- Business owners in Katlehong and the broader East Rand / Gauteng region


## Key Features and Functionality

### 1. Global Navigation Menu

A consistent navigation bar appears on every page, allowing visitors to reach
any page in a single click:

- The current page is highlighted in bold teal on each page
- Available from the top of every page for easy orientation

### 2. Homepage (`index.html`)

- Hero section with clear value proposition
- Primary call-to-action: "Request a Free Assessment"
- "What We Do" overview highlighting three core services
- Footer link to Contact

### 3. About Us (`about.html`)

- "Who We Are" company introduction
- Mission statement
- Vision statement
- "Why Choose Us" list (predictable costs, plain language, local presence,
  partnership approach)

### 4. Services (`service.html`)

Six service categories presented in a two-column layout:

1. IT Support & Managed Services
2. Cybersecurity
3. Cloud Management
4. IT Consulting
5. Web Development
6. Home & Industry Solutions

Each service includes a description and a bulleted list of specific offerings.

### 5. Enquiry (`enquiry.html`)

Lead-generation form with the following fields:

- Full Name (required)
- Email Address (required)
- Phone Number (optional)
- Service Needed (dropdown selection)
- Message / needs description (textarea)
- Submit button

### 6. Contact (`contact.html`)

- Phone number (clickable `tel:` link)
- Email address (clickable `mailto:` link)
- Physical address (Katlehong, East Rand, Gauteng)
- Business hours
- Map placeholder for future Google Maps embed

### 7. Footer (on every page)

- Copyright notice
- Direct link to Contact page

### 8. Cross-Browser Compatibility

- No JavaScript dependencies — works with JavaScript disabled
- CSS reset ensures consistent baseline across Chrome, Firefox, Safari, Edge
- System font stack — no external font requests that can fail
- Standard HTML5 semantic elements
- Vendor-neutral CSS (autoprefixer not required for modern browsers)
- Viewport meta tag ensures correct mobile rendering
- Uses widely supported features: CSS Grid, Flexbox, custom properties,
  `clamp()`, `:focus-visible`, `prefers-reduced-motion`

### 9. Responsive Design

- Mobile-first layout
- Hamburger navigation below 820px
- Fluid typography using `clamp()`
- Auto-fitting card grids
- Asymmetric two-column layouts above 900px
- Fully tested from 320px to 1400px+
## Styling and CSS Architecture

### Stylesheet Naming Convention

The project uses a single stylesheet named **`style.css`** — lowercase, single
descriptive word, no spaces, no version numbers.
### Class Naming Convention

All CSS classes use **kebab-case** (e.g. `.site-header`, `.service-card`,
`.nav-toggle-label`). A **BEM-inspired modifier pattern** is used for variants:

- Block: `.btn`, `.card`, `.nav-list`
- Modifier: `.btn--primary`, `.btn--ghost`, `.btn--block`
- State: `.active`

### Design Tokens (CSS Custom Properties)

All colours, fonts, spacing and sizing are controlled from a single `:root`
block, so the entire site's look can be changed from one place. Tokens are
prefixed for clarity:

| Prefix | Purpose | Example |
|--------|---------|---------|
| `--clr-` | Colours | `--clr-accent: #00b4d8` |
| `--fs-` | Font sizes | `--fs-lg` (fluid via `clamp()`) |
| `--sp-` | Spacing scale | `--sp-md: 1.5rem` |
| `--ff-` | Font families | `--ff-base` |
| `--radius-` | Border radii | `--radius-md: 8px` |
| `--shadow-` | Box shadows | `--shadow-md` |

### CSS Reset

The stylesheet opens with a **modern CSS reset** (Section 1 of `style.css`)
that ensures consistent rendering across browsers:

- Universal `box-sizing: border-box`
- Zeroed default margins and padding
- `text-size-adjust` normalised for mobile Safari / Chrome
- Media elements set to `display: block; max-width: 100%`
- Form controls inherit font and colour from their parent
- Lists, tables and blockquotes neutralised
- `list-style` removed only when `role="list"` is present (preserves accessibility)

### Layout Techniques Used

| Technique | Where Used |
|-----------|-----------|
| **Flexbox** | Header bar, navigation menu, footer brand row, hero action buttons, info cards |
| **CSS Grid — auto-fit** | `.grid-auto` for service cards, stats strip, contact info cards |
| **CSS Grid — asymmetric split** | `.grid-split` (1.6fr / 1fr) on About, Enquiry and Contact pages |
| **CSS Grid — form rows** | `.form-row` puts paired form fields side-by-side above 640px |
| **Sticky positioning** | `.site-header` stays fixed at top while scrolling |
| **Layered gradients** | Hero and CTA bands use linear + radial gradients for depth |
| **Pseudo-elements** | Decorative glows (`::after`), checkmarks on list items (`::before`), active nav indicator |

### Default Styles Set

- **Font family:** System font stack (`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, …`) — instant loading, no external requests
- **Font sizes:** Fluid using `clamp()` — scale smoothly between mobile and desktop without breakpoints
- **Colour scheme:** Dark navy base (`#1a2332`), teal accent (`#00b4d8`), light grey background (`#f4f6f8`)
- **Line height:** `1.65` for body text — improves readability
- **Margins and padding:** Controlled by a consistent spacing scale (`--sp-xs` through `--sp-2xl`)
- **Focus styles:** Visible `:focus-visible` outline for keyboard accessibility

### Interactive Elements

- **Navigation:** Hover colour change, active-page highlight with left border (mobile) or filled background (desktop)
- **Hamburger menu:** Animated transition from three lines to an X when open (CSS-only, via checkbox hack)
- **Buttons:** Lift on hover (`translateY(-2px)`), shadow grows, pressed state on `:active`
- **Cards:** Lift with larger shadow on hover, subtle gradient overlay fades in
- **Form fields:** Border colour shifts on hover, accent border + soft glow ring on focus
- **Footer links:** Slide right slightly on hover
- **Info cards:** Lift on hover

### Responsive Design

The site is **mobile-first** and uses a mix of fluid sizing and breakpoints:

| Breakpoint | Target | What Changes |
|-----------|--------|--------------|
| (base) | Mobile (< 640px) | Single-column layout, hamburger nav, stacked cards |
| `640px` | Large phone / small tablet | Form rows become two-column |
| `720px` | Tablet | Footer becomes three-column grid |
| `820px` | Small laptop | Hamburger replaced by horizontal nav bar |
| `900px` | Desktop | `.grid-split` becomes asymmetric two-column layout |

**Responsive techniques used:**

- **Fonts:** `clamp()` scales every heading and body size fluidly
- **Images:** Reset ensures `max-width: 100%; height: auto` on all media
- **Content:** Grid `auto-fit` + `minmax()` reflows cards automatically
- **Spacing:** `padding-inline` and `padding-block` on containers keep layout balanced at every width
- **Viewport meta tag:** Present on every page for correct mobile rendering

### Accessibility Features

- **Skip link** at the top of every page for keyboard users
- **`:focus-visible`** outlines on all interactive elements
- **`.visually-hidden`** helper class for screen-reader-only text
- **`prefers-reduced-motion`** media query disables animations for users who request it
- **Semantic landmarks:** `<header>`, `<nav>`, `<main>`, `<footer>`, `<aside>`, `<article>`
- **ARIA labels** on the hamburger toggle and navigation regions
- **Colour contrast** meets WCAG AA for body text and buttons

### No JavaScript

The entire site — including the mobile hamburger menu — works with **zero
JavaScript**, using the CSS checkbox hack. This maximises cross-browser
compatibility and ensures the site functions even if scripts are blocked.

## Site Map

### Text-based Structure

Level 1 The Entry Point
•	Homepage (index.html)
o	The main landing page and central hub of the website
o	Contains the hero section, tells client what we do and how to get ahold of us.
o	Every other page is reachable from here

Level 2 The Main Pages, these are linked from the home page
Page	File	Purpose
About Us	about.html	Company story, mission, vision, why choose us
Services	service.html	Detailed service offerings across six categories
Enquiry	enquiry.html	Free assessment request form (lead generation)
Contact	contact.html	Phone, email, address, business hours, map


### Page Directory

| Page | File Name | Purpose |
|------|-----------|---------|
| Homepage | `index.html` | Landing page, central hub, primary call-to-action |
| About Us | `about.html` | Company story, mission, vision, differentiators |
| Services | `service.html` | Detailed service offerings across six categories |
| Enquiry | `enquiry.html` | Free assessment request form (lead generation) |
| Contact | `contact.html` | Contact details, business hours, map placeholder |
| Stylesheet | `style.css` | Styling for all the web pages|

### Navigation Relationships

- Fully connected navigation — from any page, a visitor can reach any other
  page in one click via the top navigation bar.
- Primary user journeys:
  - Awareness: `Homepage → Services → Enquiry`
  - Trust: `Homepage → About Us → Contact`
  - Direct action: `Any Page → Enquiry`
  - Information: `Homepage → Services → About Us → Contact`
- Footer link to Contact on every page ensures easy reach after scrolling.


---

## How to Use

1. Download or clone all five HTML files into the same folder.
2. Open `index.html` in any web browser (Chrome, Firefox, Safari, Edge).
3. Use the top navigation menu to move between pages.
4. No server, build process, or installation is required.

---

## Future Enhancements

- Add a CSS stylesheet for improved visual design **Part2 added**
- Embed a live Google Map on the Contact page
- Connect the enquiry form to a backend or email service
- Add a blog or insights section for SEO
- Add individual detail pages for each service
- Implement analytics tracking for KPI measurement

## References 
datamanagement.hms.harvard.edu. (n.d.). File Naming Conventions. [online] Available at: https://datamanagement.hms.harvard.edu/plan-design/file-naming-conventions [Accessed 16 Sept. 2026].

Abdellah Slimani (2024). Mastering File Naming: The Essential Guide for Every Developer - Sytelix Blog. [online] Sytelix. Available at: https://sytelix.com [Accessed 17 Sept. 2026].

Isaac, N. (2023). File Naming Conventions: Best Practices, Examples, and Templates. [online] SuiteFiles. Available at: https://www.suitefiles.com/how-to-create-a-successful-file-naming-convention/ [Accessed 17 Sept. 2026].

## Author

Musawenkosi Mnanzana
ST10500929 - WEDE POE PART 1 & 2
