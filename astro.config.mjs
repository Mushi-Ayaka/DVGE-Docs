import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';
import rehypeMermaid from 'rehype-mermaid';

// https://astro.build/config
export default defineConfig({
  site: 'https://mushi-ayaka.github.io',
  base: '/DVGE-Docs/',
  trailingSlash: 'always',
  build: {
    format: 'directory'
  },
  markdown: {
    rehypePlugins: [
      [rehypeMermaid, { strategy: 'img-svg', dark: true, mermaidConfig: { theme: 'dark' } }]
    ],
  },
  integrations: [
    starlight({
      title: 'DVGE',
      logo: {
        src: './src/assets/icon.png',
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/Mushi-Ayaka/Dynamic-Vector-Graphics-Engine--DVGE-' },
      ],
      customCss: [
        './src/styles/variables.css',
        './src/styles/starlight-theme.css',
      ],
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'Español',
          lang: 'es',
        },
      },
      sidebar: [
        {
          label: 'Motor',
          collapsed: false,
          autogenerate: { directory: 'engine' },
        },
        {
          label: 'Ecosistema',
          collapsed: false,
          autogenerate: { directory: 'ecosystem' },
        },
        {
          label: 'Desarrollo',
          collapsed: false,
          autogenerate: { directory: 'development' },
        },
        {
          label: 'Proyecto',
          collapsed: false,
          autogenerate: { directory: 'about' },
        },
      ],
    }),
    react(),
  ],
});