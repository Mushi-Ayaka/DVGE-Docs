---
title: Brand Identity
description: Official brand assets and visual identity for Ember Motion Studio and the DVGE engine.
sidebar:
  order: 5
---

The visual identity of this project is divided into two distinct layers: **Ember Motion Studio** (the user-facing production suite and design environment) and **DVGE** (the technical engine that powers the entire platform).

> **Ember Motion Studio** is the commercial and user-experience layer, designed for broadcast production. **DVGE (Dynamic Vector Graphics Engine)** is the open-source (MIT) rendering engine residing at the core, guaranteeing deterministic frame calculations.

---

## Ecosistema & Core Terminology

To avoid any confusion within our community and codebase, here is the official definition of the terms used across the ecosystem:

*   **Ember Motion Studio**: The visual desktop application (Electron + React) where video editors create, manage, configure, and render their dynamic graphics.
*   **DVGE (Dynamic Vector Graphics Engine)**: The underlying high-performance, deterministic core rendering engine. It handles frame-by-frame calculations and media compiling.
*   **Vibe Motion Workflow**: The design and development methodology where creators style animations by defining their creative "vibe" and using an external AI chat to write deterministic code, then pasting it into the Studio for instant feedback.
*   **Knowledge Bridge**: The application's native context exporter. It extracts the canvas properties and sandbox limits into a single, structured PDF file designed to perfectly train external LLMs.

---

## Ember Motion Studio (The Suite)

The **Ember** logo represents the energy, heat, and movement of modern broadcast graphics.

<div style="display: flex; gap: 1.5rem; justify-content: center; flex-wrap: wrap; margin: 2.5rem 0;">
  <div style="text-align: center; padding: 2.5rem; background: #050505; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); flex: 1; min-width: 300px; display: flex; flex-direction: column; align-items: center; justify-content: center;">
    <h3 style="margin-top: 0; color: white; font-size: 1.1rem; margin-bottom: 2rem;">Ember Logo Square</h3>
    <img src="/logo-square.png" alt="Ember Logo Square" width="160" height="160" style="display: block; margin: 0 auto 2rem; filter: drop-shadow(0 0 15px rgba(228, 76, 48, 0.25));" />
    <a href="/logo-square.png" download="Ember_Logo_Square.png" style="display: inline-block; padding: 0.6rem 1.2rem; background: #E44C30; color: white; text-decoration: none; border-radius: 4px; font-weight: bold; font-size: 0.85rem; transition: opacity 0.2s;">Download PNG</a>
  </div>

  <div style="text-align: center; padding: 2.5rem; background: #050505; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); flex: 1; min-width: 300px; display: flex; flex-direction: column; align-items: center; justify-content: center;">
    <h3 style="margin-top: 0; color: white; font-size: 1.1rem; margin-bottom: 2rem;">Ember Element Mark</h3>
    <img src="/elementSquare.png" alt="Ember Element Mark" width="300" height="300" style="display: block; margin: 0 auto 2rem; filter: drop-shadow(0 0 15px rgba(228, 76, 48, 0.15));" />
    <a href="/elementSquare.png" download="Ember_Element_Square.png" style="display: inline-block; padding: 0.6rem 1.2rem; background: #E44C30; color: white; text-decoration: none; border-radius: 4px; font-weight: bold; font-size: 0.85rem; transition: opacity 0.2s;">Download PNG</a>
  </div>
</div>

---

## DVGE (The Engine)

We maintain the original engine identity for developers and contributors within the open-source ecosystem.

<div style="display: flex; gap: 1.5rem; justify-content: center; flex-wrap: wrap; margin: 2.5rem 0;">
  <div style="text-align: center; padding: 2rem; background: #0d0d0d; border-radius: 8px; border: 1px solid rgba(255,255,255,0.04); flex: 1; min-width: 180px; display: flex; flex-direction: column; align-items: center;">
    <p style="margin: 0 0 1.25rem 0; font-size: 0.75rem; color: #666; font-family: monospace;">DVGE_STANDARD</p>
    <img src="/icon.png" alt="DVGE Core Icon" width="64" height="64" style="display: block; margin: 0 auto 1.5rem;" />
    <a href="/icon.png" download="DVGE_Icon_Standard.png" style="color: #E44C30; text-decoration: none; font-size: 0.75rem; font-weight: bold; border-bottom: 1px solid transparent; transition: border 0.2s;">Download PNG</a>
  </div>

  <div style="text-align: center; padding: 2rem; background: #0d0d0d; border-radius: 8px; border: 1px solid rgba(255,255,255,0.04); flex: 1; min-width: 180px; display: flex; flex-direction: column; align-items: center;">
    <p style="margin: 0 0 1.25rem 0; font-size: 0.75rem; color: #666; font-family: monospace;">DVGE_HIGHLIGHT</p>
    <img src="/icon_highlight.png" alt="DVGE Highlight Icon" width="64" height="64" style="display: block; margin: 0 auto 1.5rem;" />
    <a href="/icon_highlight.png" download="DVGE_Icon_Highlight.png" style="color: #E44C30; text-decoration: none; font-size: 0.75rem; font-weight: bold; border-bottom: 1px solid transparent; transition: border 0.2s;">Download PNG</a>
  </div>
</div>

---

## Official Color Palette

| Token | Hex | Usage |
| :--- | :--- | :--- |
| **Ember Base** | `#E44C30` | Core brand color, primary buttons, accents. |
| **Ember Dark** | `#801C0B` | Deep gradients and hover states. |
| **Obsidian** | `#050505` | Main application background (OLED Black). |
| **Surface** | `#121212` | Secondary panels, cards, and sidebar backgrounds. |

---

## Typography

- **Outfit (900/Extra Bold)**: For Ember Wordmarks and major headlines.
- **Inter (Regular/Medium)**: For body text and application UI controls.
- **JetBrains Mono**: For metrics, hashes, and technical engine documentation.

---

## License & Attribution

Ember Motion Studio is released under the **MIT License**. If you use the engine in your project, we appreciate including the following attribution:

> *"Graphics powered by the DVGE engine in Ember Motion Studio"*

