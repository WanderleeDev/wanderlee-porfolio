import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

import icon from "astro-icon";

import vercel from '@astrojs/vercel/serverless';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), icon()],

  image: {
    domains: ['dropbox.com'],
    remotePatterns: [{ protocol: 'https' }]
  },

  output: 'server',

  adapter: vercel({
    webAnalytics: { enabled: true }
  }),

  vite: {
    plugins: [tailwindcss()]
  }
});