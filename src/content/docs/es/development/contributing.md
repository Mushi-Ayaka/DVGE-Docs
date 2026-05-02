---
title: Contribuir
description: Cómo enviar tu plugin a la Galería Oficial de DVGE.
sidebar:
  order: 5
---

Damos la bienvenida a todas las contribuciones al repositorio **Dynamic Vector Engine Plugins**. Comparte tus gráficos con toda la comunidad de DVGE.

## Repositorio
**Repositorio de Plugins**: [github.com/Mushi-Ayaka/Dynamic-Vector-Engine-Plugins](https://github.com/Mushi-Ayaka/Dynamic-Vector-Engine-Plugins)

---

## Requisitos para Enviar un Plugin

Antes de abrir un Pull Request (PR), verifica que tu plugin cumpla con estos requisitos. Asegúrate de cumplir con cada punto:

### Requisitos Obligatorios
- La carpeta del plugin sigue el formato `kebab-case` (`mi-plugin-increible`).
- Los 4 archivos obligatorios están presentes: `manifest.json`, `index.html`, `style.css`, `script.js`.
- `manifest.json` tiene un `id` único, `name`, `version` y `description`.
- El plugin es **determinista**: cero usos de `requestAnimationFrame`, `setTimeout` o bibliotecas en tiempo real.
- El acceso al DOM se hace exclusivamente a través de `ctx.root` — nunca mediante `document`.
- Se ha añadido la entrada en `registry.json` con los metadatos correctos.

### Estándares de Calidad
- El plugin se renderiza correctamente a **1920x1080**.
- Si el plugin tiene una introducción/salida, las animaciones utilizan `ctx.timeline.introProgress` / `ctx.timeline.outroProgress`.
- Todas las consultas al DOM se almacenan en caché (se guardan) en el método `awake` a través de `ctx.refs`.
- No hay importaciones externas desde CDNs (nada de `<script src="...">` o CSS `@import`).

---

## Estructura de la Carpeta del Plugin

```
tu-nombre-de-plugin/
├── manifest.json   ← Descriptor del Plugin
├── index.html      ← Fragmento HTML
├── style.css       ← Estilos encapsulados (1920x1080)
└── script.js       ← Lógica mediante dvEngine.register()
```

---

## Añadir tu Entrada a `registry.json`

Abre el archivo `registry.json` en la raíz del repositorio y añade la entrada de tu plugin al array `plugins`:

```json
{
  "id": "tu-nombre-de-plugin",
  "name": "Nombre de Tu Plugin",
  "description": "Breve descripción de lo que hace el gráfico.",
  "version": "1.0.0",
  "author": "Tu Nombre",
  "updatedAt": "2026-01-01T00:00:00Z"
}
```

---

## Abrir un Pull Request

1. **Haz un Fork** del repositorio.
2. Crea una nueva rama: `feat/tu-nombre-de-plugin`.
3. Añade la carpeta de tu plugin y actualiza `registry.json`.
4. Haz un Commit con un mensaje descriptivo: `feat: add [plugin-name] lower third`.
5. Abre un Pull Request dirigido a `main`.

El proceso de revisión comprobará el cumplimiento del determinismo y la calidad del código antes de fusionarlo (merge).
