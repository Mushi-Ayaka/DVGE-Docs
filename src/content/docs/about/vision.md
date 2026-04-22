---
title: La Visión
description: Por qué Jonatan Barón construyó un motor de gráficos broadcast a medida utilizando tecnología web.
sidebar:
  order: 3
---

## El Problema

Los gráficos broadcast profesionales — tercios inferiores (lower thirds), marcadores deportivos, cintas de noticias — siempre han vivido en un mundo desconectado de la web moderna. Herramientas como Adobe After Effects y el Fusion de DaVinci Resolve requieren conocimientos costosos para operar y producen resultados opacos y no extensibles.

La alternativa era peor: usar animaciones web para video. Las bibliotecas de animación JavaScript estándar funcionan genial en un navegador web, donde los fotogramas son una sugerencia. Pero en el momento en que intentas exportar esas animaciones a video fotograma por fotograma, se desmoronan.

**El fallo principal**: las bibliotecas en tiempo real como GSAP funcionan basándose en el reloj del sistema. Cuando un renderizador de video procesa el fotograma 1, luego el fotograma 2, luego el fotograma 1 de nuevo (para verificar), esas bibliotecas producen resultados diferentes porque el "tiempo" es distinto. El resultado es inestable.

---

## La Solución: Determinismo Matemático

DVGE se construyó sobre un principio único e inquebrantable:

> *Un gráfico renderizado en el fotograma 47 hoy debe ser **idéntico a nivel de bits** a un gráfico renderizado en el fotograma 47 el próximo año, en cualquier máquina.*

El motor logra esto otorgando al plugin un número de fotograma discreto y preguntando: "Dado este fotograma exacto, ¿cómo debería verse la pantalla?". La animación es pura matemática. No hay reloj. No hay desviación (drift).

Esta es la API de `ctx.timeline`. En lugar de `"cuántos milisegundos han pasado"`, pregunta `"¿cuál es el progreso de esta animación?"`. El resultado es un motor de renderizado en el que puedes confiar — el tipo que exigen los profesionales del broadcast.

---

## ¿Por qué Tecnología Web?

La decisión de construir sobre Electron, React y Remotion fue intencional:

1. **Universalidad**: HTML/CSS/JS es el stack de programación más ampliamente comprendido del planeta. Cualquier desarrollador web puede escribir un plugin.
2. **Extensibilidad**: Un esquema de manifiesto JSON más cuatro archivos es un sistema de plugins infinitamente más accesible que los SDKs en C++ o lenguajes de scripting privativos.
3. **Portabilidad**: El resultado es un archivo `.mov` estándar con canal alfa, compatible con cualquier editor de video importante.

DVGE demuestra que la tecnología web, cuando se restringe correctamente, puede cumplir con los estándares de producción de video profesional más exigentes.

---

## La Filosofía de la Arquitectura

> **Seguridad por defecto. Resiliencia ante fallos. Rendimiento a través de matemáticas.**

Cada decisión arquitectónica en DVGE se tomó para servir a estos tres principios:
- La **caja de arena (sandbox)** existe porque los plugins son código de terceros — nunca se debe confiar en ellos.
- La **E/S atómica (atomic I/O)** existe porque el trabajo del usuario es sagrado — nunca debe corromperse.
- La **matemática de fotogramas (frame-math)** existe porque el video profesional exige perfección — la desviación es un fracaso.
