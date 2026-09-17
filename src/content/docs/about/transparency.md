---
title: Transparency & Ethics
description: Why Ember Motion Studio™ builds trust at an Enterprise level. Read about our benchmark data and open-source compliance.
sidebar:
  order: 5
---

Trust is proven with verifiable data and open architecture.

## Windows SmartScreen & Trust

When executing the Ember installer on Windows, you may encounter a blue SmartScreen warning stating that *"Windows protected your PC"*.

### Why does this happen?
To bypass Windows SmartScreen, desktop applications must be signed with a digital **EV (Extended Validation) Code Signing Certificate**. These certificates cost between **$300 and $500 USD per year** and require registering a legal corporate entity. 

As an independent project maintained by a single developer, this annual expense is currently non-viable at this stage.

### Our Safety Commitment
Ember Motion Studio™ is built on the **DVGE (Dynamic Vector Graphics Engine) Runtime Bridge**, whose core engine is open-source under the **MIT License**.
*   **Open-Source Core:** The DVGE Runtime Bridge engine source code is publicly available on [GitHub](https://github.com/Mushi-Ayaka/Dynamic-Vector-Graphics-Engine--DVGE-). You can audit the engine at any time.
*   **VirusTotal Audited:** Every installer release is systematically scanned. The current `v5.9.1` setup file has a clean **0/58 Detections on VirusTotal** rating, confirming it is 100% safe and free from malware or adware. You can read the [Verifiable VirusTotal Report](https://www.virustotal.com/gui/file/162e380eb33279999064f5b87d4ff5a10b339936113bcb61aa7e5a47994074b4?nocache=1) directly.
*   **No Malware/Telemetry:** We do not embed hidden tracking scripts, malicious telemetry, or third-party advertising libraries. What you build stays strictly on your machine.

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

## Open Source, Non-Profit Compliance

DVGE and Ember Motion Studio™ are open-source projects maintained without a lucrative purpose. The source code is released under the MIT License, while the ™ symbol identifies the project name and logos as marks. MIT licensing and trademark identification serve different purposes: MIT governs the code, and the marks must not be used to misrepresent endorsement or affiliation.

**Ember Motion Studio™** stands on the shoulders of technological giants. We publicly acknowledge and strictly respect the licenses of the critical open-source infrastructure that makes this project possible:

- **Electron** (System layer and window management)
- **Chromium** (V8 Engine and WebGL rasterization)
- **FFmpeg** (Media processing and ProRes encoding)
- **React** (Interactive user interface)
- **Remotion** (Frame-time mathematics engine)

Our entire platform respects the ecosystem and strives to contribute to the evolution of "WebTech" within the professional broadcast video industry.
