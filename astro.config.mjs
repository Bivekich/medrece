import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sanity from '@sanity/astro';
import netlify from '@astrojs/netlify';

const sanityConfig = {
  projectId: 'lgd6f46p',
  dataset: 'production',
  useCdn: true,
};

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sanity(sanityConfig)],
  output: 'server',
  adapter: netlify(),
});
