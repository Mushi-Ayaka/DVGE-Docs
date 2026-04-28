# DVGE Docs — Landing & Documentación Oficial

Sitio web oficial del **Dynamic Vector Graphics Engine (DVGE)**.
Construido con Astro + Starlight. Desplegado en GitHub Pages.

**Producción:** https://mushi-ayaka.github.io/DVGE-Docs/

---

## Stack

- [Astro 6](https://astro.build) — framework principal
- [Starlight](https://starlight.astro.build) — sistema de documentación
- [React 19](https://react.dev) — componentes interactivos (Hero, PluginGallery)
- [Framer Motion](https://www.framer.com/motion/) — animaciones del hero
- [Rehype Mermaid](https://github.com/remcohaszing/rehype-mermaid) — diagramas en docs

## Estructura

```
src/
├── components/       # Nav, Hero, Pillars, Footer, PluginGallery
├── content/docs/     # 22 páginas de documentación (Starlight)
│   ├── engine/       # Arquitectura, Rendimiento, Benchmarks, Roadmap
│   ├── ecosystem/    # API, Comunidad, Repositorio de plugins
│   ├── development/  # Quick Start, Manifest, AI Guide, Contributing
│   └── about/        # Manual, Changelog, Visión, Licencia, etc.
├── pages/
│   └── index.astro   # Página de inicio (landing)
└── styles/           # Variables, hero.css, starlight-theme.css
```

## Desarrollo local

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # build de producción
npm run preview   # preview del build
```

## Deploy

El deploy es automático vía GitHub Actions al hacer push a `main`.
El workflow está en `.github/workflows/`.

## Sincronización con el motor

El contenido de esta landing se sincroniza con el engine mediante la CLI `dvge-sync`,
ubicada en `Dynamic Vector Graphics Engine/tools/dvge-sync/`.

Para propagar una nueva versión del motor a esta landing:

```bash
cd "Dynamic Vector Graphics Engine/tools/dvge-sync"
node index.js sync all
```

Ver `AGENT-MANUAL.md` en la CLI para el flujo completo de release.
