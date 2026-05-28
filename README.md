# LamitaWebsite

Omah Lamita is a handmade ethnic accessories website built with Next.js and TypeScript.

## Project Overview

This site showcases LAMITA's brand story, product catalog, materials, contact channels, and bilingual content for Indonesian and English visitors.

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
npm run start
```

## Brand Assets

- Logo with dark-mode treatment: [public/images/brand/Lamita with Logo DM.svg](public/images/brand/Lamita%20with%20Logo%20DM.svg)
- Logo with light-mode treatment: [public/images/brand/Lamita with Logo LM.svg](public/images/brand/Lamita%20with%20Logo%20LM.svg)
- Wordmark dark-mode: [public/images/brand/Lamita Wordmark DM.svg](public/images/brand/Lamita%20Wordmark%20DM.svg)
- Wordmark light-mode: [public/images/brand/Lamita Wordmark LM.svg](public/images/brand/Lamita%20Wordmark%20LM.svg)

## Language Support

- Locale provider: [src/components/providers/LocaleProvider.tsx](src/components/providers/LocaleProvider.tsx)
- Language toggle: the globe button in the navbar switches between `ID` and `EN`.
- `tentang-kami` translations: [src/lib/translations.ts](src/lib/translations.ts)

## Key Files

- [src/app/tentang-kami/page.tsx](src/app/tentang-kami/page.tsx) — about page entry
- [src/components/about/TentangKamiContent.tsx](src/components/about/TentangKamiContent.tsx) — about page content
- [src/components/layout/Navbar.tsx](src/components/layout/Navbar.tsx) — navigation and language toggle

## Contributor

- Putra Abyasa Wedha (2902583635)
