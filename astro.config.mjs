import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import icon from 'astro-icon';
import vercel from '@astrojs/vercel/serverless';
import keystatic from '@keystatic/astro';

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), markdoc(), icon(), keystatic(), db()],
  output: 'server',
  adapter: vercel(),
  image: {
    domains: ['cloudinary.com']
  }
});