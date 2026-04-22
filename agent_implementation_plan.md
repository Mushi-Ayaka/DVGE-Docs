# DVGE Landing & Docs - Implementation Plan

Este documento es una guía paso a paso para que un agente autónomo implemente las correcciones y mejoras arquitectónicas en el proyecto DVGE.

## Phase 1: Navigation Redesign (Top Dropdown Nav)
**Objetivo:** Reemplazar la navegación actual por un sistema de 4 secciones principales con menús desplegables (dropdowns) para albergar subsecciones, solucionando el problema de responsividad sin recurrir a menús laterales intrusivos.

*   **Archivo Objetivo:** `src/components/Navigation.astro`
*   **Acciones:**
    1.  Estructurar el HTML para contener 4 categorías principales (ej: *Engine*, *Ecosystem*, *Development*, *About*).
    2.  Implementar la lógica de Dropdown (CSS puro con `:hover` y `focus-within` o usando web components ligeros) para que al interactuar con una categoría, se desplieguen sus sub-enlaces.
    3.  Asegurar que en resoluciones móviles, estas 4 secciones se reorganicen de forma limpia en la parte superior. Si la cantidad de links sigue siendo grande, las 4 secciones principales colapsan en un clásico "nav dropdown" estándar desde la cabecera.
    4.  Aplicar variables CSS de cristal (glassmorphism) existentes para mantener la estética Obsidian & Ember.

## Phase 2: Asset & Iconography Cleanup (Limpieza de "csv/svg" en código y Emojis)
**Objetivo:** Eliminar la inyección de código sucio (SVGs como strings masivos en archivos Astro) y el uso de emojis informales en la documentación profesional.

*   **Archivos Objetivo:** `src/components/Pillars.astro`, `src/content/docs/**/*.md` (ej. `branding.md`)
*   **Acciones:**
    1.  **En Pillars.astro:** Eliminar la propiedad `svgPath` que contiene código duro ilegible.
    2.  Crear componentes Astro separados para los iconos (`<IconDatabase />`, `<IconShield />`, etc.) o usar `<img />` con PNGs/SVGs limpios alojados en la carpeta `public` o `src/assets/`.
    3.  **En Documentación:** Realizar un escaneo de los archivos Markdown para eliminar emojis (✅, ❌, etc.) y reemplazarlos por viñetas profesionales, notas tipo `> [!NOTE]` (si la plataforma lo soporta), o listas convencionales.

## Phase 3: Starlight Engine Fixes (Mermaid Diagrams)
**Objetivo:** Permitir que los diagramas de arquitectura en la documentación se rendericen correctamente como gráficos en lugar de bloques de texto crudo.

*   **Archivos Objetivo:** `package.json`, `astro.config.mjs`
*   **Acciones:**
    1.  Verificar el método de integración de Mermaid para Starlight (generalmente vía configuración nativa o instalando una dependencia menor).
    2.  Actualizar `astro.config.mjs` para habilitar el motor de renderizado de Mermaid, asegurando que la página "Core Architecture" sea legible.

## Phase 4: Data Layer Consistency
**Objetivo:** Eliminar el salto de idiomas que resta credibilidad (Landing en Inglés, Datos de Plugins en Español).

*   **Archivo Objetivo:** `src/data/plugins.json`
*   **Acciones:**
    1.  Traducir o unificar el contenido dinámico (descripciones de plugins, labels como "Nombre" o "Rol") al Inglés, para que coincida perfectamente con el idioma y el tono de la Landing Page principal.
