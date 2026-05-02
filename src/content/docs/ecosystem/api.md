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
| `ctx.utils` | `object` | Built-in library of math and easing functions. |
| `ctx.settings` | `object` | Engine metadata: `fps`, `duration`, `width`, `height`. |

**`ctx.settings` values:**
```javascript
ctx.settings.fps        // number — frames per second (e.g. 60)
ctx.settings.duration   // number — total duration in frames (e.g. 120 for 2s at 60fps)
ctx.settings.width      // number — canvas width in pixels (e.g. 1920)
ctx.settings.height     // number — canvas height in pixels (e.g. 1080)
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

## `ctx.utils` — Easing Library

Built specifically for high-end animation software needs:

| Function | Signature | Description |
| :--- | :--- | :--- |
| `lerp` | `(a, b, t)` | Linear interpolation. |
| `clamp` | `(val, min, max)` | Clamps a value to a range. |
| `spring` | `(t)` | Spring-physics effect with bounce. |
| `easeOutCubic` | `(t)` | Smooth ease out for elegant stops. |
| `easeInOutCubic` | `(t)` | Symmetrical easing for organic movement. |
| `easeOutBounce` | `(t)` | Elastic bounce on entry. |
| `easeOutElastic` | `(t)` | Spring-like elastic effect. |
| `hexToRgb` | `(hex)` | Returns an `"r, g, b"` string for use in CSS `rgba()`. |
| `typewriter` | `(text, frame, fps)` | Returns the visible substring for a typewriter text effect. |
| `tickerOffset` | `(frame, speed, cW, tW)` | Calculates the X offset for an infinite news ticker. |

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
