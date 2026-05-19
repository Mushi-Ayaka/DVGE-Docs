---
title: User Manual
description: Comprehensive guide for video editors and producers. Learn how to create, customize, and export professional broadcast motion graphics.
sidebar:
  order: 1
---

**Ember Motion Studio** is a production tool designed for video editors, producers, and content creators to build, customize, and export broadcast motion graphics quickly — without requiring advanced technical knowledge. The system is powered by the **DVGE rendering engine**.

## The Workflow

Three steps from idea to final broadcast video:

```txt
Browse Catalog → Create Project → Export & Use
```

---

## 1. The Plugin Catalog

Starting with v5.5.0, you can expand your broadcast graphics library with a single click:

1. On the home screen, click **"🛍️ Plugin Catalog"**.
2. Browse all available designs from the official **Ember** repository.
3. Click **"Install"** on any motion graphic you like.
4. The plugin will automatically appear in your project templates list.

:::tip[Automatic Updates]
If an installed plugin receives an upgrade, the Catalog will show an **"Update"** button — keeping your graphics library always up to date.
:::

---

Starting from version 5.8.0 Master, you have total control over your workflow directly from the Project Gallery:

### Creating a New Project

1. Enter a project name.
2. Select a **graphic template** (local or installed from the Catalog).
3. Click **"Create Project"**.

### Organization and Maintenance

- **Rename Projects**: Click the settings button (gear icon) on any card to change the project's name. The system will securely rename the folder on your disk.
- **Delete Projects**: Keep your workspace clean by deleting old or incorrect projects directly from the Gallery.
- **Integrity Check**: If a required plugin for a project has been deleted or moved, you will see a **"MISSING PLUGIN"** badge. The engine will lock that project to protect application stability until the plugin is restored.

---

## The Editor

### Properties Panel

Modify text, colors, and images — changes are **instantaneous** in the real-time preview.

- **Branding**: If the template supports it, a "Branding" section allows you to upload your logo and choose its position (e.g., Bottom Right) with a single click.
- **Alignment**: Control the global position of the graphic without touching a single line of code.
- **Transparency Transformer (v5.4.0)**: The engine now guarantees perfect, professional transparency for broadcast, eliminating artifacts and accidental black backgrounds.

### Data Security

Thanks to **Atomic Saving**, your work is protected against unexpected crashes. The save indicator in the bottom left corner confirms when your file is safely written to disk.

---

## Professional Export

1. Click **"Render"**.
2. The engine generates a **ProRes 4444 video with an Alpha channel** (native transparency).
3. **Drag and Drop**: Drag the exported `.mov` file directly from **Ember Motion Studio** into your timeline in **DaVinci Resolve, Premiere Pro, or After Effects**.

:::important[Tip for DaVinci Resolve]
If you see a black background when importing the video, right-click the clip in the **Media Pool** → **Clip Attributes** → **Video** tab → Change **Alpha Mode** to **"Straight"** or **"Premultiplied"**.
:::

Transparency is automatically preserved — thanks to the deterministic engine, what you see in the preview is exactly what you get in the final export file.

---

## Vibe Motion Workflow (Knowledge Bridge)

The modern workflow for generating dynamic broadcast graphics with AI assistants:

> [!NOTE]  
> **No Built-in LLM:** Ember Motion Studio is designed as a high-performance sandbox and rendering engine. It does **not** contain an integrated local AI model or native chat interface. This keeps the application extremely lightweight, eliminates subscription costs, and allows you to always use the most advanced external models (like Claude 3.5 Sonnet or GPT-4o) without hardware constraints.

### How it works:

1. Open any project with the **"Ember Studio Master"** plugin.
2. In the properties panel, locate the **"Ember Master Rules"** field.
3. **Drag and drop** the indicated zone directly into your preferred external AI chat interface.
4. The engine delivers the compiled technical PDF with all sandbox rules — the AI generates the correct plugin on the first try.
5. Paste the code response into the **"Universal Artifact"** field in the inspector — the engine automatically parses and renders the HTML, CSS, and JS.

:::tip[No Text Copying]
The Knowledge Bridge uses native Electron drag-and-drop. You don't need to copy and paste rule text — the PDF handles everything.
:::

---

## Troubleshooting

| Issue | Solution |
| :--- | :--- |
| Blank preview screen | Open Developer Tools (`Ctrl+Shift+I`) and check the console for runtime errors. |
| Plugin does not appear | Verify that the plugin folder contains all required files (`manifest.json`, etc.). |
| Render desync | Ensure the plugin is deterministic and does not use real-time external animation libraries. |
| I/O Save error | Confirm that the application has write permissions in your Documents folder. |
