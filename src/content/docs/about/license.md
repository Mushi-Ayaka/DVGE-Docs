---
title: License
description: Licensing terms for DVGE (Dynamic Vector Graphics Engine) Runtime Bridge and Ember Motion Studio.
sidebar:
  order: 6
---

## Licensing Model: Open Core

This ecosystem operates under a **dual-licensing model** designed to keep the core technology free and open while allowing the commercial product to remain sustainable.

### DVGE (Dynamic Vector Graphics Engine) Runtime Bridge — MIT License

The **DVGE (Dynamic Vector Graphics Engine) Runtime Bridge** is the open-source core engine. It is licensed under the permissive **MIT License**, which grants you broad rights:

- ✅ Free for personal, commercial, and educational use.
- ✅ Freedom to copy, modify, and distribute the engine.
- ✅ Freedom to build derivative works on top of the engine.
- ⚠️ Attribution required — the original MIT copyright notice must be preserved in all copies or substantial portions of the Software.

```
MIT License
Copyright (c) 2026 Jonatan Barón
```

The full MIT license text is available in the `LICENSE` file in the [DVGE repository](https://github.com/Mushi-Ayaka/Dynamic-Vector-Graphics-Engine--DVGE-).

---

### Ember Motion Studio — Proprietary License

**Ember Motion Studio** is the professional desktop suite built on top of the DVGE Runtime Bridge. It is **not open-source** and is distributed under a **proprietary commercial license**.

- ❌ The source code of Ember Motion Studio is **not available** for public use, modification, or redistribution.
- ❌ You may not reverse-engineer, decompile, or disassemble the software.
- ✅ You may use the distributed installer for personal and professional creative work as granted by the EULA.
- ✅ End-users are granted a non-transferable, non-exclusive license to use the application.

Specific terms of use are defined in the [End User License Agreement (EULA)](/about/terms/) that you accept upon installation.

---

## Planned Commercial Tiers (Upcoming)

As part of the long-term roadmap, additional commercial modules are planned:

| Tier | Description |
|---|---|
| **FREE** | DVGE Runtime Bridge (MIT). Ideal for community, students, and individuals. |
| **PRO** *(Coming Soon)* | Ember Power User tools — Batch Render Panel, advanced timeline controls. |
| **ENTERPRISE** *(Coming Soon)* | High-performance C++/Rust compiled plugins for render farm orchestration and critical broadcast workflows. |

> **Infrastructure Note**: Commercial licensing will be securely handled via *Lemon Squeezy* and *Cloudflare*, with validation via License Key — no invasive user accounts.

---

## Third-Party Dependency Licenses

**Ember Motion Studio** and the **DVGE Runtime Bridge** rely on third-party technologies with their own license terms. Our licenses do not supersede these:

### Remotion (Rendering Engine)

Remotion operates under a **dual license** — it is **not MIT**:

- **Free tier**: Individuals, non-profits, and companies with up to 3 employees.
- **Commercial (Paid)**: Companies or organizations exceeding that threshold.

**By using Ember Motion Studio or the DVGE Runtime Bridge, you acknowledge that:**

1. The integrated Remotion components are subject to the [Remotion License](https://www.remotion.dev/license).
2. If your organization requires a commercial Remotion license, it is **your responsibility** to acquire it directly from Remotion.
3. Jonatan Barón does not grant, nor intend to grant, any sub-license over the Remotion code that contravenes its original terms.

### Other Dependencies

The following open-source components are also used. Their respective licenses apply:

- **Electron** — MIT License
- **React** — MIT License
- **FFmpeg** — LGPL / GPL (see [FFmpeg license](https://ffmpeg.org/legal.html))
- **Chromium** — BSD / various open-source licenses

---

*Copyright © 2026 Jonatan Barón. All rights reserved regarding the Ember Motion Studio commercial suite. The DVGE Runtime Bridge core is MIT-licensed.*
