import {defineConfig} from 'astro/config';
import icon from 'astro-icon';
import db from '@astrojs/db';
import node from '@astrojs/node';
import solidJs from '@astrojs/solid-js';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [db(), solidJs(), tailwind(), icon()],
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  image: {
    domains: ['unsplash.com', 'media.istockphoto.com', 'source.unsplash.com'],
  },
});
