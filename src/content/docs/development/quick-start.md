---
title: Quick Start
description: Build your first broadcast template for Ember Motion Studio from scratch. Go from zero to a live motion graphics overlay in 5 minutes.
sidebar:
  order: 1
---

This guide will walk you step-by-step through creating your first **Template** (Motion Graphics Overlay) for **Ember Motion Studio** from scratch. No prior experience with the **DVGE engine** is required.

## Prerequisites

- **Ember Motion Studio** (v5.8.0+) installed and running.
- A code editor (VS Code is recommended).

---

## Step 1: Create the Template Folder

Open **Ember Motion Studio**, go to **Help → Open Plugins Folder**. Inside that directory, create a new folder named `my-first-template`.

```txt
Ember_Plugins/
└── my-first-template/    ← Create this folder
    ├── manifest.json
    ├── index.html
    ├── style.css
    └── script.js
```

---

## Step 2: The Manifest (`manifest.json`)

This file is the blueprint. It tells the engine what type of module this is (`type: "template"`) and what customizable properties it exposes to the user via the inspector.

```json
{
  "id": "com.dev.my-first-template",
  "name": "My First Template",
  "version": "1.0.0",
  "author": "Your Name",
  "type": "template",
  "description": "A simple, animated lower third for broadcast.",
  "presets": ["branding", "motion"],
  "permissions": [],
  "schema": [
    {
      "type": "string",
      "id": "name",
      "label": "Name",
      "defaultValue": "John Doe"
    },
    {
      "type": "string",
      "id": "role",
      "label": "Role",
      "defaultValue": "Broadcast Engineer"
    }
  ]
}
```

---

## Step 3: The Structure (`index.html`)

Raw HTML snippet for your graphic. No `<html>`, `<head>`, or `<body>` tags are needed.

```html
<div id="card">
  <h1 id="name-el"></h1>
  <p id="role-el"></p>
</div>
```

---

## Step 4: The Styling (`style.css`)

Styles are restricted to a 1920x1080 canvas. Use absolute positioning to place your motion graphics perfectly.

```css
#card {
  position: absolute;
  bottom: 120px;
  left: 80px;
  padding: 20px 30px;
  background: rgba(0, 0, 0, 0.75);
  border-left: 5px solid var(--accent);
  border-radius: 4px;
}

#name-el {
  font-size: 48px;
  color: white;
  margin: 0;
}

#role-el {
  font-size: 28px;
  color: #ccc;
  margin: 0;
}
```

---

## Step 5: The Logic (`script.js`)

This is the entry point to the **DVGE engine**. Use the `awake` method to cache DOM references, and the `update` method to animate them frame by frame.

```javascript
dvEngine.register({
  // Runs once. Store your DOM references here — never in update.
  awake: (ctx) => {
    ctx.refs.nameEl = ctx.root.getElementById('name-el');
    ctx.refs.roleEl = ctx.root.getElementById('role-el');
    ctx.refs.card   = ctx.root.getElementById('card');
  },

  // Runs every frame. Bind data and apply animations.
  update: (ctx) => {
    const { timeline, utils, refs, props } = ctx;

    // 1. Always bind data from props
    refs.nameEl.innerText = props.name;
    refs.roleEl.innerText = props.role;

    // 2. Animate the intro using timeline (no GSAP, no setTimeout)
    const opacity = utils.easeOutCubic(timeline.introProgress);
    const xOffset = utils.lerp(-30, 0, timeline.introProgress);
    refs.card.style.opacity = opacity;
    refs.card.style.transform = `translateX(${xOffset}px)`;
  }
});
```

---

:::tip[The Golden Rule]
All animation logic must rely on `ctx.timeline` or `ctx.frame`. This ensures that **Ember Motion Studio** renders frame-perfect graphics when exporting to ProRes 4444 with an alpha channel. Never use `requestAnimationFrame`, `setTimeout`, or real-time libraries.
:::

---

## Step 6: Load and Preview

1. In **Ember Motion Studio**, create a **New Project**.
2. Select `My First Template` from the list of available templates in the Studio.
3. The graphic should appear immediately in the real-time preview window.
4. Edit the **Name** and **Role** fields in the property inspector — the graphic will update instantly.

You have just built your first broadcast-ready motion graphic with **Ember**. 🎉
