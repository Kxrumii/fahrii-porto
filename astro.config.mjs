import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Mendaftarkan React ke sistem Astro
  integrations: [react()],
  
  // Menginjeksi Tailwind langsung ke dalam mesin kompilator Vite
  vite: {
    plugins: [tailwindcss()],
  }
});