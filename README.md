# Pramod Gurudath — Portfolio

A premium modern portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- Full-screen animated hero section
- Glassmorphism cards with subtle gradient backgrounds
- Smooth scrolling with active section navigation
- Work experience timeline
- Featured projects & skills showcase
- Certifications section
- LinkedIn links & resume download
- Fully responsive design

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Color Palette

### Dark Mode (default)

| Element    | Hex       |
| ---------- | --------- |
| Background | `#0B1120` |
| Surface    | `#111827` |
| Heading    | `#F9FAFB` |
| Text       | `#94A3B8` |
| Accent     | `#38BDF8` |
| Hover      | `#0EA5E9` |

### Light Mode

| Element    | Hex       |
| ---------- | --------- |
| Background | `#F8FAFC` |
| Surface    | `#FFFFFF` |
| Heading    | `#0F172A` |
| Text       | `#475569` |
| Accent     | `#0284C7` |
| Hover      | `#0369A1` |
| Border     | `#E2E8F0` |
| Success    | `#16A34A` |
| Warning    | `#D97706` |
| Error      | `#DC2626` |

## Project Structure

```
src/
├── app/              # Next.js app router pages
├── components/
│   ├── layout/       # Sidebar, Footer, Providers
│   ├── sections/     # Page sections (Hero, About, etc.)
│   └── ui/           # Reusable UI components
├── data/             # Profile & content data
└── lib/              # Utilities
```

## Scripts

- `npm run dev` — Start development server
- `npm run build` — Production build
- `npm run start` — Start production server
- `npm run lint` — Run ESLint
