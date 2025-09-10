import { defineConfig } from 'vite';
import path from 'path';
import purgeCss from 'vite-plugin-purgecss';

export default defineConfig({
  base: '/codessa/', // Subpasta no GitHub Pages
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'), // Página principal
        documentation: path.resolve(__dirname, 'documentation/index.html'), // Página de documentação
      },
    },
  },
  plugins: [
    purgeCss({
      content: [
        './index.html',
        './documentation/index.html',
        './src/**/*.{js,ts,jsx,tsx,vue,html}',
      ],
    }),
  ],
});
