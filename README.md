# Portfolio Juan Navarro

Personal portfolio web application built with React and Vite.

## Tech Stack

- React 19
- Vite 6
- React Icons
- ESLint + Prettier

## Requirements

- Node.js 20.x (recommended: 20.18.0)
- npm 10+

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the local URL printed by Vite (usually `http://localhost:5173`).

## Available Scripts

- `npm run dev`: Start Vite in development mode.
- `npm run build`: Create a production build in `dist/`.
- `npm run preview`: Preview the production build locally.
- `npm run lint`: Run ESLint.
- `npm run lint:fix`: Run ESLint and apply automatic fixes.
- `npm run format`: Format the project with Prettier.

## Project Structure

```text
src/
  assets/        Static files (images, etc.)
  components/    Reusable UI components (Menu, Header, Footer)
  pages/         Main sections/pages (About, Portfolio, Services, Contact)
  utils/         Utility modules
```

## Notes

- The sidebar supports expanded and collapsed states.
- Menu and footer layout behavior depends on the sidebar state.
- Build output is generated in `dist/`.

## Deployment

Run:

```bash
npm run build
```

Then deploy the contents of `dist/` to any static hosting provider (Netlify, Vercel, GitHub Pages, S3, or similar).
