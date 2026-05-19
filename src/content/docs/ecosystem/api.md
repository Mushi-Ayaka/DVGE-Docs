---
title: Extension API
description: Comprehensive technical reference for developing Ember Motion Studio plugins. Covers dvEngine.register, the ctx object, and all available utilities.
sidebar:
  order: 2
---

Every **Ember Motion Studio** plugin is registered through the `dvEngine.register()` technical interface. This page serves as the complete reference for building broadcast-ready, deterministic motion graphics that fully utilize the **DVGE engine**.

## `dvEngine.register(lifecycle)`

The entry point for any plugin or lower third. Call this once in your `script.js` with a lifecycle object to hook into the frame-rendering loop.

```javascript
dvEngine.register({
  awake: (ctx) => { /* ... */ },
  start: (ctx) => { /* ... */ },
  update: (ctx) => { /* ... */ }
});
```

---

## Lifecycle Hooks

### `awake(ctx)`
Called **once** when the plugin is mounted. Use it to:
- Cache DOM references in `ctx.refs`.
- Apply base static styles.
- Initialize persistent state variables in `ctx.state`.

```javascript
awake: (ctx) => {
  ctx.refs.title = ctx.root.getElementById('title');
  ctx.refs.bar = ctx.root.getElementById('bar');
  ctx.state.progress = 0;
}
```

### `start(ctx)`
Called every time the playhead resets to **frame 0**. Use it to:
- Reset accumulated state.
- Trigger "first frame" effects before the broadcast output starts.

### `update(ctx)`
Called on **every single frame** (60fps during real-time preview and ProRes rendering). Use it for:
- All data binding (reading from `ctx.props`).
- All animation logic (reading from `ctx.timeline`).

:::caution[Performance]
Cache your DOM references in `awake`. Never call `ctx.root.getElementById()` inside `update` — it executes 60 times per second and will cause frame drops during live streaming.
:::

---

## The Context Object (`ctx`)

Every lifecycle hook receives the same `ctx` object, which provides the sandboxed environment required for transparent backgrounds and alpha channel rendering:

| Property | Type | Description |
| :--- | :--- | :--- |
| `ctx.frame` | `number` | Current animation frame (starts at 0). |
| `ctx.timeline` | `object` | Normalized timing helpers for precise motion design. |
| `ctx.root` | `ShadowRoot` | The isolated Shadow DOM root. **Always use this instead of `document`.** |
| `ctx.props` | `object` | Live values from the inspector form, keyed by `manifest.json` schema IDs. |
| `ctx.refs` | `object` | Your personal DOM reference cache (persists across frames). |
| `ctx.state` | `object` | Your personal persistent state store (persists across frames). |
| `ctx.utils` | `object` | Built-in library of math, easing, and responsive functions. |
| `ctx.env` | `object` | Engine runtime environment parameters: `isExporting`, `resolution`, `aspectRatio`, `isPortrait`, `safeArea`. |
| `ctx.global` | `object` | Shared global context/settings (persists across the application runtime). |

**`ctx.env` values:**
```javascript
ctx.env.isExporting     // boolean — true when rendering the high-res ProRes/MOV/WebM output
ctx.env.resolution      // object — canvas resolution, e.g. { width: 1920, height: 1080 }
ctx.env.aspectRatio     // number — current canvas aspect ratio (e.g. 1.777 for 16:9)
ctx.env.isPortrait      // boolean — true if height > width (mobile overlay layout)
ctx.env.safeArea        // object — margins to prevent cutting off text on broadcast: { top, right, bottom, left }
```

---

## `ctx.timeline`

Replaces raw frame arithmetic with intent-based normalized values. This is crucial for creating adaptive motion graphic templates.

| Property | Type | Description |
| :--- | :--- | :--- |
| `timeline.progress` | `number [0–1]` | Overall clip progress (0 = start, 1 = end). |
| `timeline.isIntro` | `boolean` | `true` if the current frame is within the intro phase. |
| `timeline.isOutro` | `boolean` | `true` if the current frame is within the outro phase. |
| `timeline.introProgress` | `number [0–1]` | Local progress within the intro phase. |
| `timeline.outroProgress` | `number [0–1]` | Local progress within the outro phase. |

**Example — fade in during intro, fade out during outro:**
```javascript
update: (ctx) => {
  const { timeline, refs } = ctx;
  if (timeline.isIntro) refs.el.style.opacity = timeline.introProgress;
  if (timeline.isOutro) refs.el.style.opacity = 1 - timeline.outroProgress;
}
```

---

## `ctx.utils` — Animation & Easing Library

Built specifically for high-end vector animation and responsive broadcast requirements:

| Function | Signature | Description |
| :--- | :--- | :--- |
| `lerp` | `(a, b, t)` | Linear interpolation. |
| `clamp` | `(val, min, max)` | Clamps a value to a specified range. |
| `loop` | `(frame, duration)` | Returns a repeating frame value between `0` and `duration - 1` for looping animations. |
| `mapRange` | `(val, inMin, inMax, outMin, outMax)` | Maps a value from an input range to a corresponding output range. |
| `bezier` | `(curveParams, t)` | Returns the cubic bezier value at progress `t` (e.g. `curveParams = [0.25, 0.1, 0.25, 1.0]`). |
| `remapX` | `(x, designWidth, currentWidth)` | Responsive helper: scales coordinates on the X axis from design resolution to runtime resolution. |
| `remapY` | `(y, designHeight, currentHeight)` | Responsive helper: scales coordinates on the Y axis from design resolution to runtime resolution. |
| `spring` | `(t, stiffness = 100, damping = 10)` | Organic spring physics solver returning a ratio based on time/progress `t`. |
| `hexToRgb` | `(hex)` | Returns an `"r, g, b"` string for use in CSS `rgba()`. |
| `typewriter` | `(text, frame, framesPerChar = 2)` | Returns the visible substring for a typewriter text effect at the current frame. |
| `tickerOffset` | `(frame, speed, textWidth)` | Calculates the X offset for an infinite looping news ticker. |

---

## `manifest.json` Reference

```json
{
  "id": "my-plugin",
  "name": "My Plugin",
  "version": "1.0.0",
  "description": "A brief description of the broadcast graphic.",
  "presets": ["branding", "motion", "layout"],
  "schema": [
    { "type": "string", "id": "title", "label": "Main Title", "defaultValue": "Hello" },
    { "type": "color", "id": "accent", "label": "Accent Color", "defaultValue": "#E44C30" },
    { "type": "number", "id": "fontSize", "label": "Font Size (px)", "defaultValue": 48 },
    { "type": "image", "id": "logo", "label": "Logo Image" }
  ]
}
```

### Schema Field Types
| Type | Inspector Control | Notes |
| :--- | :--- | :--- |
| `string` | Text input | Also used for multiline inputs. |
| `color` | Color picker | Returns a hex string. |
| `number` | Numeric slider | Returns a number. |
| `image` | File upload | Returns a base64 data URL. |
| `code` | Code editor | Returns a raw HTML string. |
| `prompt` | Draggable zone (PDF) | **v5.5.0** — Generates and exposes the engine rules PDF for drag-to-AI. |
| `artifact` | Universal paste zone | Accepts `[[[HTML]]]`, `[[[CSS]]]`, `[[[JS]]]` AI blocks and automatically distributes them. |
| `info` | Read-only text | Displays copyable information to the user (e.g. prompts, IDs). |

### Preset Flags
| Preset | Auto-Injected Fields |
| :--- | :--- |
| `branding` | `logo` (image), `accentColor` (color) |
| `motion` | `entryDuration` (number), `exitDuration` (number) |
| `layout` | `position` (select: TL, TR, BL, BR, Center) |
