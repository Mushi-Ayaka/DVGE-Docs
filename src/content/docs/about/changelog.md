---
title: Changelog
description: Complete version history and release notes for the DVGE (Dynamic Vector Graphics Engine) Runtime Bridge and Ember Motion Studio.
sidebar:
  order: 2
---

All notable changes to the DVGE engine are documented here. Versioning strictly follows the [Semantic Versioning](https://semver.org/) standard.

---

## [5.9.0] — 2026-05-04 ✦ Current Release

### Studio Master Integration & Advanced Inspector (The Power Update)

- **Studio Master Core Integration**: The "Empty Project" (Proyecto Vacío) is now a native, hardcoded resource. This allows for a 100% AI-native workflow where you can program any broadcast-grade animation from scratch without external dependencies.
- **Dynamic Inspector v2**: 
  - **Tag Auto-Extraction**: The engine now automatically parses `/* @dv-prop ... */` comments from your code to generate the UI.
  - **Advanced Field Types**: Added native support for `alignment` (9-point grid), `slider`, `easing` (visual curves), and `icon`.
  - **Internal Field Filtering**: Redundant code/PDF fields are now hidden from the Inspector to keep the UI focused on animation controls.
- **i18n Multi-Language Engine**: Full implementation of a reactive translation system supporting English and Spanish.
- **Engine Utilities Expansion**: Added `dvUtils.mapRange` for easier animation math inside the sandbox.
- **Bugfixes & Stability**:
  - Filtered duplicate property IDs in the Inspector.
  - Fixed synchronization between the Inspector and the PreviewPlayer for system fields (FPS, Resolution).

---

## [5.8.0] — 2026-04-30

### Master Stabilization and Legal Compliance (The Master Sync)

- **Deterministic Boot (Honest Boot Sequence)**: Definitive elimination of the black screen via an honest initialization sequence. The UI now reports real-time hardware scanning (GPU/CPU), esbuild pipeline synchronization, and module mounting.
- **External Link Optimization**: Implemented a global Electron handler to force all external links to open in the system's default browser, significantly improving security and UX.
- **UI/UX Refinement**:
  - Aesthetic unification of contact links (GitHub, Portfolio, Gmail).
  - Elimination of redundancy in modals (removed duplicate close buttons).
  - Integration of a direct Gmail compose deep link.
- **Roadmap v6 Synchronization**: Laid the groundwork for modular architecture and batch rendering capabilities.

---

## [5.7.0] — 2026-04-28

### Technical Transparency & Pro Loader (The Visibility Update)

- **esbuild Pipeline Visualization**: Integration of real-time compilation logs inside the UI. Developers can now see exactly when a plugin is transpiling, eliminating uncertainty during complex logic changes.
- **Dynamic Initialization Loader**: Implementation of a sequential loading system that replaces the initial black screen with an informative progress bar detailing the state of internal modules.

---

## [5.6.0] — 2026-04-26

### Project Management & Autonomy (The Freedom Update)

- **Dependency Auto-Fetch (Chromium & FFmpeg)**: The engine now automatically detects and downloads its own rendering binaries into `%APPDATA%\DVGE\bin`, eliminating the need for a globally installed Chrome browser.
- **Comprehensive Project Management**: New Gallery interface allowing users to securely rename and delete projects via atomic IPC calls.
- **Plugin Integrity Checks**: The system now detects missing or corrupted plugins before opening the editor, displaying error badges and locking access to prevent unexpected crashes.
- **Frame 0 Stabilization**: Critical fix in `RenderWrapper` ensuring properties are fully injected before the first frame is captured, eliminating transparent flickering.
- **Solo Developer Identity**: Updated narrative on the landing page and documentation to reflect its independent nature and commitment to future certification.

---

## [5.5.0] — 2026-04-23

### GA Artifact Edition (Knowledge Bridge)

- **Native Knowledge Bridge**: The engine caches a `DVGE-Master-Rules.pdf` file and exposes it as a drag zone inside the "DVGE Studio Master" plugin inspector. By dragging directly into an AI chat (Claude, Gemini, ChatGPT), the assistant receives the complete engine context — Sandbox rules, `ctx` API, Shadow DOM constraints, and the utility table — without needing to copy raw text.
- **Internal PDF Auto-Generator**: A silent Electron window compiles engine rules to a temporary cached PDF file (`%TEMP%/DVGE-Master-Rules.pdf`), bypassing AI plain text length restrictions.
- **Studio Master Refactor**: The "DVGE Studio Master" plugin now incorporates standardized support for the `prompt` schema field while maintaining high UI fidelity.

## [5.4.0] — 2026-04-23

### Production Stabilization and Alpha Channel (The Alpha Fix)

- **Transparency Transformer**: Implementation of critical Chromium flags (`--transparent-background-color=0`) and `evaluatePage` injection to guarantee true transparency in ProRes 4444.
- **Data Probe System**: New data injection system via an internal HTTP endpoint (`/props.json`) to prevent complex data truncation caused by Windows CLI limits.
- **Engine Compatibility**: `getElementById` polyfill inside the plugin root container to support legacy and complex logic structures.
- **Chrome System Bypass**: Forced usage of the system's Chrome executable for enhanced reliability in Windows environments.
- **DaVinci Optimization**: Adjusted pixel format to `yuva444p10le` with verified transparency metadata.

---

## [5.3.0] — 2026-04-23

### Infrastructure Audit and Stabilization (Kernel Hardening)

- **Definitive "Black Background" Resolution**: Diagnosed and fixed the transparency issue in ProRes 4444, restoring the professional alpha channel for broadcast.
- **System Chrome Bypass**: Migrated from Remotion's `chrome-headless-shell` to the official Google Chrome binary, resolving silent capture failures.
- **Kernel Logging (Black Box)**: Physical logging system (`render_debug.log`) capturing internal server requests, 404 errors, and real-time console logs.
- **Rasterization Hardening**: Forced CPU flags (`--force-cpu-rasterization`) to guarantee frame capture even during GPU driver failures on Windows.

---

## [5.2.0] — 2026-04-23

### "Iron Wall" Isolation (Bug Purge)

- **Manual Isolation Server**: Independent HTTP server (`serve()`) for headless rendering, eliminating conflict with the Vite port 3000 that caused the "Black Background" bug.
- **Strict Naming Convention**: Migrated composition IDs to `kebab-case` to comply with Remotion 4.x strict validations.
- **Deterministic Synchronous Engine**: Refactored `RenderWrapper` to guarantee atomic DOM injection before frame capture.
- **Native Transparency**: Restored true alpha channel for ProRes 4444 exports.

---

## [5.1.0] — 2026-04-23 (GA)

### Next-Generation Rendering Engine (Zero-Bundle Runtime)

- **Zero-Bundle Architecture**: Eliminated `@remotion/bundler` from the runtime. The Remotion entry point is pre-compiled at build time, shrinking the installer from 12,466 files to a single `app.asar`.
- **Fast Installation**: Installation time plummeted from minutes to seconds.
- **Explicit `binariesDirectory`**: Native binaries (`remotion.exe`, `ffmpeg.exe`) are now safely resolved from `app.asar.unpacked`, eliminating `ENOENT` errors in production.
- **Safe CWD**: The rendering process redirects its working directory to `%TEMP%`, avoiding `EPERM` permission errors.
- **Total Compatibility**: Rendering via `npm run dev` and in production is mathematically identical. No plugin API changes.

---

## [5.0.0] — 2026-04-22 (GA)

### Smart Engine & Auto-Rescue

- **Intelligence Layer (Auto-Rescue)**: The engine detects and automatically wraps scripts that fail to follow the official registration standard (detecting global functions like `update` or `renderDVGE`).
- **Resilient Sandbox**: Smart `fakeWindow` that silently intercepts and nullifies `requestAnimationFrame`, protecting the integrity of ProRes 4444 rendering.
- **API Simplification**: Introduced `ctx.utils.loop(frame, duration)` for perfect cyclic animations.
- **AI-Native Workflow**: Significantly higher "One-Shot" success rate when running AI-generated code.

---

## [4.1.0] — 2026-04-21 (GA)

### Plugin Catalog & Ecosystem

- **Integrated Catalog**: New panel to discover and download plugins directly from the official GitHub repository.
- **Dynamic Management**: Install, update, and delete plugins directly from the UI.
- **Professional Identity**: Social links (GitHub, Portfolio) and direct Gmail contact in the "About" modal.

---

## [4.0.0] — 2026-04-21 (GA)

### QA Remediation & GA Architecture

- **Isolated Sandbox**: Plugins run within a `fakeWindow` without access to Electron APIs.
- **Secure I/O**: Asynchronous and atomic auto-save (`.tmp`), preventing project corruption.
- **Graceful Degradation**: Crash isolation for plugin code without freezing the main application.
- **Reactive Error Boundary**: Protected interface against malformed `manifest.json` files.
- **Deterministic API**: Deprecated GSAP in favor of `ctx.timeline`. Added `ctx.state`, `ctx.refs`, `utils.spring`, `utils.typewriter`, `utils.tickerOffset`.

---

## [3.3.0] — 2026-04-21

### Editor Edition (Professional HTML-to-Video)

- **Code Fields**: Multiline HTML/CSS editing directly in the sidebar with `code` type schema fields.
- **HTML Master Renderer Plugin**: High-performance template for rendering pure HTML/CSS compositions.
- **Manual Save**: Button in the sidebar to force a disk write for the project.

---

## [3.2.1] — 2026-04-21

### Critical Fix — Universal Plugin Engine

- **Bug Resolved**: The engine previously always rendered the shape of the very first plugin loaded when switching projects; form fields also failed to update.

### Dynamic Plugin Engine

- **Generative Form**: The sidebar reads the active plugin's `manifest.json` and dynamically generates the correct inputs (`string`, `color`, `number`, `image`).
- **Plugin Badge**: The sidebar displays the name and version of the active plugin.
- **Hard Reset on Project Switch**: The player is completely destroyed and recreated when switching projects to avoid CSS contamination.

---

## [3.1.0] — 2026-04-21

### Core & Developer Experience (DX)

- **Native Utilities Library (`dvEngine.utils`)**: Math functions (`lerp`, `clamp`) and easing functions (`easeOutCubic`, `easeOutBounce`, etc.) automatically injected into the context.
- **Silent Auto-Save**: Automatic persistence based on 500ms debouncing.
- **Persistence Indicator**: UI in the sidebar showing the save state in real-time.

---

## [3.0.0] — 2026-04-21

### Workspace Architecture

- **Project Manager Backend**: Support for persistent projects in `Documents/DVG_Projects/<id>`.
- **V3 Lifecycle Injection**: Mandatory migration to `{ awake, start, update }` hooks for maximum 60fps performance.
- **Native Reactive Binding**: UI variables now directly impact the `update()` cycle immediately.

---

## [2.3.0] — 2026-04-21

### Hot-Swap Architecture

- **Stable Bridge Pattern**: Centralized event management outside the plugin script to prevent memory leaks.
- **Leak Detection**: Automatic cleanup of Shadow DOM and callbacks before every reload.
- **Dual Sync**: Differentiation between data updates (Soft-Sync) and logic reloads (Hard-Sync).

---

## [2.2.0] — 2026-04-21

### Added

- **`dvEngine.register` API**: New official method to synchronize frames and safely receive the Shadow Root.
- **Backwards Compatibility**: Support for legacy scripts using `window.dvContext` and `renderFrame()`.

### Fixed

- **Black Screen Fix**: Consolidation of the `PluginWrapper` lifecycle to prevent crashes during Shadow DOM initialization.
- **Total Reactivity**: Changes in the side panel reflect instantly in real-time.

---

## [2.0.0] — "The Genetic Revolution"

- Migrated from static React templates to a dynamic injection engine via Shadow DOM.
- IPC System for loading external plugins from `Documents/DV_Engine_Plugins`.
- Deterministic 60fps synchronization based on `dv-update` events.

---

## [1.0.0] — "The Native Era"

- Initial release with hardcoded `LowerThirdBasic` React components.
- Basic ProRes 4444 headless rendering pipeline.
