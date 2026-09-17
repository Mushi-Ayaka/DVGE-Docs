---
title: Building Plugins with AI
description: How to use AI assistants to generate production-ready, deterministic broadcast plugins for DVGE in minutes.
sidebar:
  order: 4
---

> **Project legal notice:** DVGE and Ember Motion Studio™ are open-source, non-profit projects. Source code is available under the MIT License. The ™ symbol identifies the project mark and does not change the software license.

Modern AI coding assistants can generate complete, production-ready motion graphics for DVGE. Starting with **v5.5.0 GA**, the engine includes the **Knowledge Bridge** — the fastest and most precise method to provide technical context to any AI model.

## Recommended Method: Knowledge Bridge (v5.5.0 GA)

The engine automatically compiles all of its strict broadcast rules (Sandbox, Shadow DOM, full API) into a comprehensive PDF file. By injecting this directly into your favorite AI, you eliminate 90% of the common code generation errors.

### Steps
1. Open the **DVGE Studio Master** plugin in any project.
2. In the right-hand inspector, locate the **"DVGE Master Rules"** field.
3. **Drag and drop** the indicated zone directly into your AI chat (Claude, Gemini, ChatGPT).
4. The engine sends the PDF via native drag-and-drop — the AI receives the complete engine context.
5. Describe the broadcast graphic you need. The AI already knows all the deterministic restrictions.

:::tip[Optimal Workflow]
The PDF includes code examples, the `ctx.utils` easing table, the `schema` field types, and the Sandbox rules. You do not need to repeat any technical constraints manually.
:::

---

## Manual Method: System Prompt (v5.0.0+)

If you do not have access to the Knowledge Bridge, copy this block into any AI assistant.

This prompt triggers the **Smart Engine / Auto-Rescue** mode: instead of the standard `dvEngine.register()` call, it defines a global `window.renderDVGE` function that the engine detects and automatically wires into the lifecycle. This is the recommended mode for AI-generated code because it gracefully tolerates common structural mistakes. For manual plugin development, use `dvEngine.register()` as described in the [Quick Start Guide](/development/quick-start/).

```text
Act as a senior Motion Graphics developer. Generate a plugin for the
DVGE engine v5.6.0 GA following these simplified rules:

SMART ENGINE COMPATIBILITY:
- Do NOT use dvEngine.register(). The engine will wrap your code.
- OBLIGATORY: Define the global function: 
  window.renderDVGE = (frame, props, ctx) => { ... }

TECHNOLOGY:
- Use ONLY HTML/CSS and Vanilla JavaScript.
- No time-based animation (requestAnimationFrame, Date.now() or GSAP).

API UTILITIES:
- Use ctx.utils.loop(frame, 180) for 3-second loops.
- Use ctx.utils.spring(t) for professional bouncing effects.
- Access the DOM via ctx.root.getElementById().

STYLE:
- Canvas is 1920x1080.
- Use .dv-glass class for premium glassmorphism.

Generate 4 files: manifest.json, index.html, style.css, script.js.

PLUGIN DESCRIPTION:
[Describe your graphic here]
```

---

## How "Auto-Rescue" Works

If the AI makes common structural mistakes, the engine corrects them at runtime to ensure the broadcast doesn't crash:
- **Silencer**: If the AI attempts to use `requestAnimationFrame`, the engine automatically intercepts and nullifies it to protect rendering determinism.
- **Auto-Bridge**: If the AI forgets the official registration hook, the engine looks for `window.renderDVGE` and connects it to the frame lifecycle for you.
- **Context Payload**: You receive `frame`, `props`, and `ctx` directly injected into every frame.

---

## Prompting Tips for Better Results

### Be Specific About Animation Behavior
- **Avoid:** "Make it animate smoothly"
- **Ideal:** "Slide in from the left during the intro phase using `ctx.timeline.introProgress` and `utils.lerp`"

### Specify the Design Intent (Layout)
- **Avoid:** "Put the text at the bottom"
- **Ideal:** "Position the card at `bottom: 120px; left: 80px` using absolute positioning"

### Define Exact Schema Fields
- **Avoid:** "Add some text fields"
- **Ideal:** "Include these schema fields: `name` (string), `role` (string), `accentColor` (color, default: #E44C30)"

---

## Validating AI-Generated Code

Before loading an AI-generated plugin into DVGE, check for these common AI hallucinations:

| Issue | Incorrect AI Code | Solution |
| :--- | :--- | :--- |
| Document Access | `document.getElementById('x')` | `ctx.root.getElementById('x')` |
| Real-Time Anim | `gsap.to(el, {...})` | `utils.lerp(0, 1, ctx.timeline.introProgress)` |
| Timers | `setTimeout(fn, 500)` | Logic must be based on `ctx.frame` |
| CSS Imports | `@import url(...)` | Embed styles directly into `style.css` |
| External Scripts| `<script src="...">` | All logic must be inside `script.js` |

:::tip[Pro Workflow]
Paste the AI output directly into DVGE and check the browser DevTools console (`Ctrl+Shift+I`). The engine will log any sandbox violations in real-time, making it incredibly easy to fix and iterate.
:::
