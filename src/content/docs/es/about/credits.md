---
title: Créditos y Atribuciones
description: Reconocimiento a las tecnologías que hacen posible a DVGE.
sidebar:
  order: 4
---

## A hombros de gigantes

Seamos transparentes: DVGE se denomina "Motor Gráfico", pero en realidad es un **orquestador avanzado**. No inventamos la rueda construyendo un rasterizador C++ desde cero.

El mérito es haber encapsulado, restringido y orquestado las mejores tecnologías web del mundo para que cumplan con los rigurosos estándares de la televisión y el broadcast.

DVGE no existiría sin el trabajo colosal de los desarrolladores de estas infraestructuras *Open Source*:

### 1. Remotion

**El corazón matemático.** Remotion es la tecnología que nos permite convertir el caótico DOM de la web en una línea de tiempo discreta. Es la razón por la que podemos garantizar que el fotograma 45 siempre será idéntico, eliminando la desviación de tiempo.

- [Repositorio de Remotion](https://github.com/remotion-dev/remotion)

> **Nota de licencia:** Remotion no es MIT. Opera bajo una licencia dual: gratuita para individuos y organizaciones sin fines de lucro o con hasta 3 empleados, y de pago (licencia corporativa) para organizaciones con fines de lucro de mayor tamaño. DVGE actualmente califica bajo la licencia gratuita. Consulta [remotion.pro](https://www.remotion.pro) antes de usar DVGE como base de un producto comercial.

### 2. Electron & Chromium

**El contenedor y el lienzo.** Electron nos permite llevar el ecosistema web al escritorio interactuando con el sistema de archivos de forma atómica. Chromium, con su motor V8 y WebGL, actúa como nuestro lienzo de renderizado ultrarrápido.

- [Repositorio de Electron](https://github.com/electron/electron)

### 3. FFmpeg

**El motor de compresión.** Todo el procesamiento masivo, la inyección del canal alfa y la codificación final en el estándar de la industria `ProRes 4444` es manejado por FFmpeg.

- [Sitio oficial de FFmpeg](https://ffmpeg.org/)

### 4. React

**La interfaz y la lógica.** React nos permite construir la arquitectura multi-ventana y ofrecer a la comunidad una forma estándar, declarativa e inmensamente popular de programar animaciones.

- [Repositorio de React](https://github.com/facebook/react)

