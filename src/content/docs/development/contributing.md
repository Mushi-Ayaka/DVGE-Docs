---
title: Contributing
description: How to submit your custom plugin to the Official DVGE Gallery and share your broadcast graphics.
sidebar:
  order: 5
---

> **Project legal notice:** DVGE and Ember Motion Studio™ are open-source, non-profit projects. Source code is available under the MIT License. The ™ symbol identifies the project mark and does not change the software license.

We welcome all contributions to the **Dynamic Vector Engine Plugins** repository. Share your broadcast templates and tools with the entire Ember Motion Studio™ community.

## Repository
**Plugins Repository**: [github.com/Mushi-Ayaka/Dynamic-Vector-Engine-Plugins](https://github.com/Mushi-Ayaka/Dynamic-Vector-Engine-Plugins)

---

## Requirements for Submitting a Plugin

Before opening a Pull Request (PR), verify that your plugin meets these requirements. Ensure you comply with each point:

### Mandatory Requirements
- The plugin folder follows the `kebab-case` format (`my-awesome-plugin`).
- The 4 mandatory files are present: `manifest.json`, `index.html`, `style.css`, `script.js`.
- `manifest.json` has a unique `id`, `name`, `version`, and `description`.
- The plugin is **deterministic**: strictly ZERO usage of `requestAnimationFrame`, `setTimeout`, or real-time web libraries like GSAP.
- DOM access is done exclusively through `ctx.root` — never via the global `document`.
- An entry has been added to `registry.json` with the correct metadata.

### Quality Standards
- The plugin renders correctly at a **1920x1080** canvas size.
- If the plugin has an intro/outro, the animations properly utilize `ctx.timeline.introProgress` / `ctx.timeline.outroProgress`.
- All DOM queries are cached inside the `awake` method via the `ctx.refs` object.
- There are no external imports from CDNs (no `<script src="...">` or CSS `@import`). All assets must be local or encoded.

---

## Plugin Folder Structure

```
your-plugin-name/
├── manifest.json   ← Plugin Descriptor & Schema
├── index.html      ← HTML structure
├── style.css       ← Encapsulated styles (1920x1080)
└── script.js       ← Logic using dvEngine.register()
```

---

## Adding Your Entry to `registry.json`

Open the `registry.json` file at the root of the plugins repository and append your plugin's entry to the `plugins` array:

```json
{
  "id": "your-plugin-name",
  "name": "Your Plugin Name",
  "description": "Brief description of what the graphic does.",
  "version": "1.0.0",
  "author": "Your Name",
  "updatedAt": "2026-01-01T00:00:00Z"
}
```

---

## Opening a Pull Request

1. **Fork** the repository.
2. Create a new branch: `feat/your-plugin-name`.
3. Add your plugin folder and update `registry.json`.
4. Commit with a descriptive message: `feat: add [plugin-name] lower third`.
5. Open a Pull Request targeting the `main` branch.

The review process will check for determinism compliance and code quality before merging it into the public catalog.
