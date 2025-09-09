import { defineConfig } from 'vite';
import path from 'path';
import purgeCss from 'vite-plugin-purgecss';

export default defineConfig({
  base: '/codessa/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    purgeCss({
      content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue,html}'],
    }),
  ],
});
