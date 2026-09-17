import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';
import mermaid from 'astro-mermaid';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ember-motion-studio-landing.vercel.app',
  trailingSlash: 'always',
  build: {
    format: 'directory'
  },
  integrations: [
    mermaid(),
    starlight({
      title: 'Ember Motion Studio™',
      favicon: '/logo-square.png',
      logo: {
        src: './src/assets/logo-square.png',
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/Mushi-Ayaka/Dynamic-Vector-Graphics-Engine--DVGE-' },
        { icon: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/ember_motion_studio/' },
        { icon: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/@embermotionstudio' },
        { icon: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/EmberMotionStudio' },
        { icon: 'threads', label: 'Threads', href: 'https://www.threads.net/@ember_motion_studio' },
        { icon: 'tiktok', label: 'TikTok', href: 'https://www.tiktok.com/@embermotionstudio' },
      ],
      customCss: [
        './src/styles/variables.css',
        './src/styles/starlight-theme.css',
      ],
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'English',
          lang: 'en',
        },
        es: {
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
    sitemap(),
  ],
});