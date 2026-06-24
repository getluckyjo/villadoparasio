// @ts-check
import { defineConfig } from 'astro/config';

// Base + site are env-driven so the same code deploys cleanly to either:
//   • Netlify / Vercel / custom domain  → root, base "/" (default)
//   • GitHub Pages project site         → SITE_BASE=/villadoparasio
// https://astro.build/config
const base = process.env.SITE_BASE || '/';
const site = process.env.SITE_URL || 'https://viladoparaiso.com';

export default defineConfig({ site, base });
