/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      spacing: {
        'col-width': '80px', // Ta variable de colonne personnalisée
      },
      maxWidth: {
        'grid-max': '1200px', // La limite de ta grille
      }
    },
  },
  plugins: [],
}