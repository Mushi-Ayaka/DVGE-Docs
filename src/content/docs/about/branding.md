---
title: Identidad Visual
description: Recursos de marca de Ember Motion Studio y el motor DVGE.
sidebar:
  order: 5
---

La identidad visual de este proyecto se divide en dos capas: **Ember Motion Studio** (la suite de usuario y entorno de diseño) y **DVGE** (el motor técnico que potencia toda la plataforma).

> **Ember Motion Studio** es la capa comercial y de experiencia de usuario, diseñada para la producción broadcast. **DVGE (Dynamic Vector Graphics Engine)** es el motor de renderizado de código abierto (MIT) que reside en el núcleo y garantiza el determinismo de cada fotograma.

---

## Ember Motion Studio (Suite)

El logo de **Ember** representa la energía y el movimiento de los gráficos broadcast modernos.

<div style="display: flex; gap: 1.5rem; justify-content: center; flex-wrap: wrap; margin: 2.5rem 0;">
  <div style="text-align: center; padding: 2.5rem; background: #050505; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); flex: 1; min-width: 300px; display: flex; flex-direction: column; align-items: center; justify-content: center;">
    <h3 style="margin-top: 0; color: white; font-size: 1.1rem; margin-bottom: 2rem;">Ember Logo Square</h3>
    <img src="/DVGE-Docs/logo-square.png" alt="Ember Logo Square" width="160" height="160" style="display: block; margin: 0 auto 2rem; filter: drop-shadow(0 0 15px rgba(228, 76, 48, 0.25));" />
    <a href="/DVGE-Docs/logo-square.png" download="Ember_Logo_Square.png" style="display: inline-block; padding: 0.6rem 1.2rem; background: #E44C30; color: white; text-decoration: none; border-radius: 4px; font-weight: bold; font-size: 0.85rem; transition: opacity 0.2s;">Descargar PNG</a>
  </div>

  <div style="text-align: center; padding: 2.5rem; background: #050505; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); flex: 1; min-width: 300px; display: flex; flex-direction: column; align-items: center; justify-content: center;">
    <h3 style="margin-top: 0; color: white; font-size: 1.1rem; margin-bottom: 2rem;">Ember Element Mark</h3>
    <img src="/DVGE-Docs/elementSquare.png" alt="Ember Element Mark" width="300" height="300" style="display: block; margin: 0 auto 2rem; filter: drop-shadow(0 0 15px rgba(228, 76, 48, 0.15));" />
    <a href="/DVGE-Docs/elementSquare.png" download="Ember_Element_Square.png" style="display: inline-block; padding: 0.6rem 1.2rem; background: #E44C30; color: white; text-decoration: none; border-radius: 4px; font-weight: bold; font-size: 0.85rem; transition: opacity 0.2s;">Descargar PNG</a>
  </div>
</div>

---

## DVGE (El Motor)

Mantenemos la identidad original del motor para desarrolladores y contribuidores del ecosistema open source.

<div style="display: flex; gap: 1.5rem; justify-content: center; flex-wrap: wrap; margin: 2.5rem 0;">
  <div style="text-align: center; padding: 2rem; background: #0d0d0d; border-radius: 8px; border: 1px solid rgba(255,255,255,0.04); flex: 1; min-width: 180px; display: flex; flex-direction: column; align-items: center;">
    <p style="margin: 0 0 1.25rem 0; font-size: 0.75rem; color: #666; font-family: monospace;">DVGE_STANDARD</p>
    <img src="/DVGE-Docs/icon.png" alt="DVGE Core Icon" width="64" height="64" style="display: block; margin: 0 auto 1.5rem;" />
    <a href="/DVGE-Docs/icon.png" download="DVGE_Icon_Standard.png" style="color: #E44C30; text-decoration: none; font-size: 0.75rem; font-weight: bold; border-bottom: 1px solid transparent; transition: border 0.2s;">Descargar PNG</a>
  </div>

  <div style="text-align: center; padding: 2rem; background: #0d0d0d; border-radius: 8px; border: 1px solid rgba(255,255,255,0.04); flex: 1; min-width: 180px; display: flex; flex-direction: column; align-items: center;">
    <p style="margin: 0 0 1.25rem 0; font-size: 0.75rem; color: #666; font-family: monospace;">DVGE_HIGHLIGHT</p>
    <img src="/DVGE-Docs/icon_highlight.png" alt="DVGE Highlight Icon" width="64" height="64" style="display: block; margin: 0 auto 1.5rem;" />
    <a href="/DVGE-Docs/icon_highlight.png" download="DVGE_Icon_Highlight.png" style="color: #E44C30; text-decoration: none; font-size: 0.75rem; font-weight: bold; border-bottom: 1px solid transparent; transition: border 0.2s;">Descargar PNG</a>
  </div>
</div>

---

## Paleta de Colores Oficial

| Token | Hex | Uso |
| :--- | :--- | :--- |
| **Ember Base** | `#E44C30` | Color de marca, botones principales, acentos. |
| **Ember Dark** | `#801C0B` | Gradientes profundos y sombras. |
| **Obsidian** | `#050505` | Fondo de aplicación (OLED Black). |
| **Surface** | `#121212` | Paneles secundarios, tarjetas y sidebar. |

---

## Tipografía

- **Outfit (900/Extra Bold)**: Para Wordmarks y titulares de Ember.
- **Inter (Regular/Medium)**: Para cuerpo de texto y controles de la interfaz.
- **JetBrains Mono**: Para métricas, hashes y documentación técnica del motor.

---

## Licencia y Uso

Ember Motion Studio se publica bajo la **Licencia MIT**. Si usas el motor en tu proyecto, te agradecemos incluir la siguiente atribución:

> *"Gráficos potenciados por el motor DVGE en Ember Motion Studio"*
