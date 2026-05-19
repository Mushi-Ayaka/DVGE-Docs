---
title: Transparency & Ethics
description: Why Ember Motion Studio builds trust at an Enterprise level. Read about our benchmark data and open-source compliance.
sidebar:
  order: 5
---

Trust is proven with verifiable data and open architecture.

## Windows SmartScreen & Trust

When executing the Ember installer on Windows, you may encounter a blue SmartScreen warning stating that *"Windows protected your PC"*.

### Why does this happen?
To bypass Windows SmartScreen, desktop applications must be signed with a digital **EV (Extended Validation) Code Signing Certificate**. These certificates cost between **$300 and $500 USD per year** and require registering a legal corporate entity. 

As a free, independent open-source project maintained by a single developer, this annual expense is currently non-viable.

### Our Safety Commitment
Ember Motion Studio is published under the permissive **MIT License**.
*   **Fully Auditable:** Our complete source code is hosted publicly on GitHub. You can review every line of code that goes into our desktop build.
*   **VirusTotal Audited:** Every installer release is systematically scanned. The current `v5.9.0` setup file has a clean **0/58 Detections on VirusTotal** rating, confirming it is 100% safe and free from malware or adware. You can read the [Verifiable VirusTotal Report](https://www.virustotal.com/gui/file/83b295c023586758c1364a87e41382ee86250eb8e70ac91bb8cd4abf6b966f47?nocache=1) directly.
*   **No Malware/Telemetry:** We do not embed hidden tracking scripts, telemetry, or third-party advertising libraries. What you build stays strictly on your machine.

### How to install safely:
1. Click **"More info"** on the blue SmartScreen window.
2. Select **"Run anyway"** to complete the installation.

---

## Real Benchmarking

We do not hide our metrics. Performance data is documented with verifiable methodologies on the [Benchmarks & Stability](/engine/benchmarks/) page, covering:

- **Rendering Determinism**: Why temporal drift is structurally impossible in our frame-math model.
- **Alpha Precision**: The three-layer chain that guarantees true alpha channel support in ProRes 4444 exports.
- **Sandbox Overhead**: Measured impact of the security isolation system on the 60fps preview loop.
- **Atomic Persistence**: Our guarantee of data integrity in the face of unexpected application crashes or power failures.

## Open Source Compliance

**Ember Motion Studio** stands on the shoulders of technological giants. We publicly acknowledge and strictly respect the licenses of the critical open-source infrastructure that makes this project possible:

- **Electron** (System layer and window management)
- **Chromium** (V8 Engine and WebGL rasterization)
- **FFmpeg** (Media processing and ProRes encoding)
- **React** (Interactive user interface)
- **Remotion** (Frame-time mathematics engine)

Our entire platform respects the ecosystem and strives to contribute to the evolution of "WebTech" within the professional broadcast video industry.
