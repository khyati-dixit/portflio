# Khyati Dixit — Portfolio

React + Vite + Tailwind CSS + Framer Motion, built from `SPEC.md`.

## Setup

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Structure

Matches SPEC.md section 6:

```
src/
 ├── assets/                 # put resume.pdf and any images here
 ├── components/
 │   ├── sections/            Navbar, Hero, About, Skills, Experience, Contact, Footer
 │   ├── ui/                  Loader, ScrollProgress, CursorGlow, GlassCard,
 │   │                        FloatingBadge, AnimatedCounter, BackToTop
 │   └── styles/               (reserved — most styling is Tailwind utility classes
 │                              + CSS variables in src/index.css)
 ├── context/
 │   └── ThemeContext.jsx     Light/dark theme via Context API
 ├── App.jsx
 └── main.jsx
```

## Before you deploy

- **Resume link**: the "Resume" button in the navbar and hero currently points at `#`.
  Drop a PDF in `src/assets/` and update the `href` in `Navbar.jsx` and `Hero.jsx`.
- **Contact details**: swap the placeholder email/GitHub/LinkedIn URLs in `Hero.jsx`,
  `Contact.jsx`, and `Footer.jsx` for the real ones.
- **Theme persistence**: `ThemeContext.jsx` keeps the light/dark choice in memory only.
  There's a commented-out `localStorage.setItem` line ready to uncomment for a real
  deployment (this was intentionally left out for the in-chat preview sandbox, which
  disallows browser storage).
- **Contact form**: currently opens the user's email client via a `mailto:` link
  (no backend). Swap `handleSubmit` in `Contact.jsx` for a real API call or a service
  like EmailJS if you want it to submit silently.

## Color palette (SPEC.md section 3)

| Role | Color |
|------|-------|
| Background | `#FFF1CA` |
| Primary | `#2D4F2B` |
| Secondary | `#708A58` |
| Accent | `#FFB823` |
| Surface | `#FFFFFF` |

Defined in `tailwind.config.js` and as CSS variables (with dark-mode overrides) in
`src/index.css`.
