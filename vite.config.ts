import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // GitHub Pages serves the app from /<repo-name>/, local dev from /
  base: process.env.DEPLOY_BASE ?? '/',
  plugins: [react(), tailwindcss()],
});
