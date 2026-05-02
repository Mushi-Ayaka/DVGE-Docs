---
title: Performance & Determinism
description: Why frame-based animation is critical for professional broadcast overlays and motion design software in Ember Motion Studio.
sidebar:
  order: 2
---

In the world of broadcast graphics and live motion design, **determinism** is not a feature; it is a strict requirement. **Ember Motion Studio** (powered by the **DVGE engine**) is engineered to deliver mathematically identical frames every single time a graphic is rendered or previewed.

## The Problem with Real-Time Animation

Standard web animation libraries (such as GSAP, Framer Motion, or Anime.js) rely on `requestAnimationFrame`, which is tied to the browser's refresh rate and the system clock. This causes severe issues in broadcast software:

- **Variable Frame Rates**: If the CPU spikes during a livestream or heavy render, the animation drops frames.
- **Timing Drift**: In long clips, timing can drift out of sync with the primary video or audio tracks.
- **Inconsistent Export**: What you see in the real-time preview might not match what is exported to the final video file.

## The Solution: Frame-Based Architecture

The **DVGE engine** enforces a strict **deterministic loop**. The system completely controls the "clock" and tells the plugin exactly which frame to render.

### The `ctx.timeline` API

Instead of asking "how much time has passed?", the engine asks "what does frame X look like?".

```javascript
update: (ctx) => {
  const { timeline, utils, refs } = ctx;
  // This animation will look EXACTLY the same on a budget laptop or a high-end broadcast workstation.
  refs.title.style.opacity = timeline.introProgress;
}
```

- **Zero Drift**: Since calculations are based on discrete frame numbers, the timing is frame-perfect down to the millisecond.
- **Bit-for-Bit Identical Renders**: Every export is identical to the real-time preview, eliminating surprises in post-production.

---

## Render Pipeline (ProRes 4444)

The export process is a high-performance **headless render** pipeline that produces broadcast-ready files.

1. **Headless Initialization**: The main process boots a virtual environment to render the composition without a visible window.
2. **Sequential Capture**: The engine advances through each frame sequentially (e.g., frame 0 to 120 for a 2-second clip at 60fps).
3. **Alpha Channel Injection**: Transparent areas of the HTML are preserved and mapped directly to the video's alpha channel.
4. **Encoding**: Frames are encoded using the **Apple ProRes 4444** codec (High fidelity + Alpha support).
5. **Output**: A `.mov` file is generated, ready to be dropped into DaVinci Resolve, Premiere Pro, or used as a stinger in OBS Studio.

### Core Optimizations

- **Hard Reset**: The DOM is completely wiped and rebuilt between project switches to prevent memory leaks and CSS contamination.
- **Asset Caching**: Images and fonts are preloaded to prevent flickering or "pop-in" during the first frames of the render.
- **Data Probe Hydration**: Project properties are transmitted via an ephemeral HTTP server (`/props.json`) instead of the CLI, bypassing Windows character limits entirely.
- **Knowledge Bridge AI**: The engine caches a technical context that AI uses to output deterministic, working code on the first try, reducing iteration cycles.
- **Honest Boot Sequence (v5.8.0 Master)**: Total elimination of the "black screen" startup by providing real-time visual reports of the hardware scan (GPU/CPU) and the esbuild pipeline synchronization before interaction is allowed.
