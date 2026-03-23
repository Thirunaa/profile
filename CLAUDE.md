# CLAUDE.md — Profile Website

## Project Overview

Personal academic/professional profile website for **Thirunaavukkarasu Murugesan** (Thirunaa), deployed to GitHub Pages at `https://thirunaa.github.io/profile`.

This is a **full revamp** of the existing site. The goal is a modern, tab-driven profile website that showcases academic and professional depth — research, achievements, media, writing, community involvement, and more.

---

## Tech Stack

- **Framework:** React 18 (Create React App)
- **Routing:** React Router v6
- **UI:** Material-UI v5 (`@mui/material`) — prefer this over MUI v4 or React Bootstrap for new work
- **Styling:** MUI `sx` prop and `styled()` — do NOT use `makeStyles` (deprecated in v5)
- **Email:** EmailJS (`@emailjs/browser`)
- **Deployment:** GitHub Pages via `gh-pages`
- **Language:** JavaScript (no TypeScript)

---

## Site Architecture

### Layout

The site uses a **two-column layout**:
- **Left sidebar** (fixed, ~280px): Profile card — photo, name, title, social links, nav
- **Right main area** (scrollable): Tab content

On mobile, the sidebar collapses to a top header.

### Navigation / Tabs

The main content area is organized into **tabs**. Each tab is a route and a discrete page.

| Tab | Route | Description |
|-----|-------|-------------|
| About | `/` | Bio, work experience, education, skills, contact |
| Research | `/research` | Papers, publications, ongoing projects, areas of interest |
| Achievements | `/achievements` | Awards, honors, certifications, milestones |
| Media | `/media` | Press mentions, interviews, podcast appearances, news features |
| Blog | `/blog` | Written articles, posts, opinions |
| Memberships | `/memberships` | Professional orgs, communities, advisory roles |
| Judging | `/judging` | Hackathon judging, grant review panels, competition committees |
| Portfolio | `/portfolio` | Code projects, demos, GitHub work |

Additional tabs can be added — keep the tab list data-driven (see `src/utils/siteData.js`).

---

## File Structure (Target)

```
src/
├── assets/
│   └── images/
├── components/
│   ├── layout/
│   │   ├── Sidebar.js          # Left profile card + nav
│   │   ├── Header.js           # Mobile top bar
│   │   └── Footer.js
│   ├── common/
│   │   ├── SectionTitle.js
│   │   ├── TabPanel.js
│   │   ├── TimelineEntry.js
│   │   ├── CardItem.js
│   │   └── EmptyState.js
│   └── sections/               # One component per tab
│       ├── About.js
│       ├── Research.js
│       ├── Achievements.js
│       ├── Media.js
│       ├── Blog.js
│       ├── Memberships.js
│       ├── Judging.js
│       └── Portfolio.js
├── pages/
│   └── MainLayout.js           # Wraps sidebar + tab router
├── utils/
│   └── siteData.js             # All content as structured data
├── App.js
└── index.js
```

---

## Data Layer

All content lives in `src/utils/siteData.js` as plain JS objects/arrays. No hardcoded strings in components. This makes content updates trivial without touching component logic.

Structure:

```js
export const profile = { name, title, bio, photo, socials, contact }
export const experience = [{ role, company, period, description }]
export const education = [{ degree, institution, period }]
export const skills = [{ category, items }]
export const research = [{ title, venue, year, link, abstract, coauthors }]
export const achievements = [{ title, issuer, year, description }]
export const media = [{ title, outlet, date, link, type }]  // type: article | podcast | video | interview
export const blogs = [{ title, platform, date, link, summary }]
export const memberships = [{ org, role, since, description }]
export const judging = [{ event, organizer, year, description }]
export const portfolio = [{ name, description, tech, github, demo, image, tags }]
export const recommendations = [{ name, title, company, text }]
export const tabs = [{ label, route, component }]  // drives the tab bar
```

---

## Design Principles

- **Clean and minimal** — academic/professional tone, not flashy
- **Accent color:** `#ffc500` (yellow-gold) — keep as brand color
- **Dark sidebar, light main area** — existing aesthetic preserved
- **Tabs are prominent** — primary navigation method
- **Empty states** — if a section has no data yet, show a placeholder gracefully
- **Mobile-first responsive** — sidebar collapses, tabs scroll horizontally on small screens
- **No page reloads** — full SPA with React Router

---

## Coding Conventions

- Use **functional components** with hooks only — no class components
- Use **MUI v5 `sx` prop** for inline styles, `styled()` for reusable styled components
- Keep component files focused — one component per file
- All content comes from `siteData.js` — components receive data as props
- Use **named exports** for components
- Keep `App.js` thin — just router setup
- Avoid installing new packages unless strictly necessary

---

## Deployment

```bash
npm run deploy   # builds and pushes to gh-pages branch
```

Homepage is set in `package.json`: `"homepage": "https://thirunaa.github.io/profile"`

---

## Out of Scope

- No backend / server-side rendering
- No CMS integration
- No authentication
- No database
