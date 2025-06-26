// @ts-check
import { defineConfig } from 'astro/config';

import vue from '@astrojs/vue';

export default defineConfig({
  output: 'static',
  base: '/',
  integrations: [vue()],
});