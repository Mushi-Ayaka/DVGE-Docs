---
title: Rendimiento y Determinismo
description: Por qué la animación basada en fotogramas es crítica para la producción de video profesional.
sidebar:
  order: 2
---

En el mundo de los gráficos para transmisión, el **determinismo** no es una característica; es un requisito. DVGE está diseñado para proporcionar fotogramas idénticos cada vez que se renderiza un gráfico.

## El Problema con la Animación en Tiempo Real

Las bibliotecas web estándar (como GSAP o Anime.js) se basan en `requestAnimationFrame`, que está atado a la frecuencia de actualización del navegador y al reloj del sistema.
- **Tasas de Fotogramas Variables**: Si la CPU tiene picos de uso, la animación salta fotogramas.
- **Desvío (Drift)**: En clips largos, el tiempo puede desviarse respecto al audio o al video principal.
- **Exportación Inconsistente**: Lo que ves en la previsualización podría no coincidir con lo que se exporta a un archivo de video.

## La Solución: Arquitectura Basada en Fotogramas

DVGE v4.0+ impone un **bucle determinista**. El motor controla el "reloj" y le dice al plugin exactamente qué fotograma renderizar.

### API `ctx.timeline`
En lugar de preguntar "¿cuánto tiempo ha pasado?", el motor pregunta "¿cómo se ve el fotograma X?".

```javascript
update: (ctx) => {
  const { timeline, utils, refs } = ctx;
  // Esta animación se verá EXACTAMENTE igual en una laptop barata o en una estación de trabajo profesional.
  refs.title.style.opacity = timeline.introProgress;
}
```

- **Cero Desvío**: Dado que los cálculos se basan en números de fotogramas discretos, la temporización es perfecta hasta el milisegundo.
- **Renders Idénticos**: Cada exportación es idéntica bit a bit en comparación con la previsualización.

---

## Tubería de Renderizado (ProRes 4444)

El proceso de exportación es un **renderizado headless** de alto rendimiento que produce archivos listos para transmisión.

1.  **Inicialización Headless**: El proceso principal inicia un entorno virtual para renderizar la composición sin una ventana visible.
2.  **Captura Secuencial**: El motor avanza por cada fotograma (ej., 0 a 120 para un clip de 2 segundos).
3.  **Inyección de Canal Alfa**: Las áreas transparentes del HTML se conservan y se mapean al canal alfa del video.
4.  **Codificación**: Los fotogramas se codifican utilizando **Apple ProRes 4444** (Alta fidelidad + soporte Alfa).
5.  **Salida**: Se genera un archivo `.mov`, listo para ser arrastrado a DaVinci Resolve, Premiere Pro u OBS.

### Optimizaciones de Rendimiento
- **Hard Reset**: El DOM se limpia por completo y se reconstruye entre cambios de proyecto para prevenir fugas de memoria y contaminación CSS.
- **Caché de Recursos**: Las imágenes y fuentes se precargan para evitar parpadeos durante los primeros fotogramas del render.
