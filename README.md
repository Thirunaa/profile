# Thirunaavukkarasu Murugesan — Personal Profile Website

Live at: **[thirunaa.github.io/profile](https://thirunaa.github.io/profile)**

---

## About

Personal academic and professional profile website for **Thirunaavukkarasu Murugesan** (goes by *Thiru* — /Thee·Ru/), Delivery Engineering Manager specializing in LLM evaluation, RLHF pipelines, and frontier AI delivery at Turing.

---

## Pages

| Tab | Description |
|-----|-------------|
| **About** | Bio, work experience, education, skills, contact |
| **Research** | Published papers, Google Scholar & ResearchGate profiles |
| **Major Work** | Awards, honors, certifications, and key milestones |
| **Projects** | Code projects, demos, and GitHub work |
| **Working On** | Current reading list and active builds |
| **Blog** | Written articles and technical posts on Medium |
| **Media** | Press features and media coverage |
| **Memberships** | Sigma Xi, Hackathon Raptors Fellowship, and professional orgs |
| **Judging** | Conference peer reviews (Microsoft CMT) and evaluation panels |
| **Copyrights & Patents** | US patent filings (USPTO) and Canadian copyright |

---

## Tech Stack

- **React 18** (Create React App)
- **React Router v6** with `HashRouter` for GitHub Pages compatibility
- **Material-UI v7** (`@mui/material`) — `sx` prop and `styled()` only
- **Inter** font via Google Fonts
- **GitHub Pages** via `gh-pages`

---

## Local Development

```bash
npm install
npm start
```

Opens at [http://localhost:3000/profile](http://localhost:3000/profile)

---

## Deployment

```bash
npm run deploy
```

Builds and pushes to the `gh-pages` branch. Homepage is set in `package.json`:

```json
"homepage": "https://thirunaa.github.io/profile"
```

---

## Content

All content lives in [`src/utils/siteData.js`](src/utils/siteData.js) as plain JS exports. To update any section (bio, experience, research, projects, etc.), edit only that file — no component changes needed.

---

## Key Highlights

- **Delivery Engineering Manager at Turing** — leading LLM evaluation and RLHF pipelines for frontier AI models
- **MS Computer Science**, Stevens Institute of Technology
- **Sigma Xi** Full Member (Member ID: 20269990617)
- **Hackathon Raptors** Distinguished Fellow (Fellowship #14091)
- **2 US Patent Applications** pending at USPTO
- **1 Canadian Copyright** registered with CIPO
- **12 International Conferences** peer reviewed (Microsoft CMT)
- **AWS Certified Cloud Practitioner**
