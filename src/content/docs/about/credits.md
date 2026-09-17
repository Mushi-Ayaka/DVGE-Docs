---
title: Credits and Attributions
description: Recognizing the core technologies that make DVGE possible.
sidebar:
  order: 4
---

> **Project legal notice:** DVGE and Ember Motion Studio™ are open-source, non-profit projects. Source code is available under the MIT License. The ™ symbol identifies the project mark and does not change the software license.

## Standing on the Shoulders of Giants

Let's be transparent: DVGE is called a "Graphics Engine", but in reality, it is an **advanced orchestrator**. We didn't reinvent the wheel by building a C++ rasterizer from scratch.

The real achievement of DVGE lies in encapsulating, restricting, and orchestrating the best web technologies in the world to meet the rigorous and unforgiving standards of television and broadcast.

DVGE would not exist without the colossal work of the developers behind these *Open Source* infrastructures:

### 1. Remotion

**The mathematical heart.** Remotion is the technology that allows us to convert the chaotic web DOM into a discrete timeline. It is the reason we can guarantee that frame 45 will always be mathematically identical, eliminating temporal drift completely.

- [Remotion Repository](https://github.com/remotion-dev/remotion)

> **License Note:** Remotion is not MIT. It operates under a dual license: free for individuals, non-profits, and very small organizations (up to 3 employees), and paid (Company License) for larger for-profit organizations. DVGE currently qualifies under the free license. Please consult [remotion.pro](https://www.remotion.pro) before using DVGE as the foundation for a large-scale commercial product.

### 2. Electron & Chromium

**The container and the canvas.** Electron allows us to bring the web ecosystem to the desktop, interacting with the file system atomically. Chromium, powered by its V8 engine and WebGL, acts as our ultra-fast rendering canvas.

- [Electron Repository](https://github.com/electron/electron)

### 3. FFmpeg

**The compression engine.** All heavy lifting, massive media processing, alpha channel injection, and the final encoding into the industry-standard `ProRes 4444` format is handled by FFmpeg.

- [FFmpeg Official Site](https://ffmpeg.org/)

### 4. React

**The interface and the logic.** React allows us to build the multi-window architecture of the Studio and provides the community with a standard, declarative, and immensely popular way to program interface logic.

- [React Repository](https://github.com/facebook/react)

