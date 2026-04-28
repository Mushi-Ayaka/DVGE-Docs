---
title: Benchmarks y Estabilidad
description: Datos técnicos verificados sobre la consistencia de renderizado, rendimiento de exportación y overhead del sistema de seguridad de DVGE.
sidebar:
  order: 4
---

DVGE está construido para entornos de transmisión profesional donde el fallo no es una opción. Medimos el rendimiento no solo en velocidad, sino en **consistencia y resiliencia**.

---

## Consistencia de Renderizado (Determinismo)

A diferencia de los motores en tiempo real, DVGE no usa un reloj del sistema para calcular animaciones. Cada fotograma se calcula a partir de su índice discreto (`frame`), lo que hace que el desvío temporal sea **estructuralmente imposible**.

| Tipo de Motor | Método de Tiempo | Resultado bajo Carga |
| :--- | :--- | :--- |
| **Tradicional (GSAP / rAF)** | Reloj del sistema (`Date.now()`) | Saltos de fotogramas bajo carga de CPU |
| **DVGE (Frame-Math)** | Índice de fotograma discreto (`ctx.frame`) | **Salida idéntica en cualquier hardware** |

### Por qué el desvío es cero por diseño

El motor no pregunta "¿cuánto tiempo ha pasado?". Pregunta "¿cómo se ve el fotograma número X?". La función `calculateTimeline(frame, fps, durationInFrames)` produce siempre el mismo resultado para los mismos parámetros de entrada, independientemente de la carga del sistema o la velocidad del hardware.

```javascript
// El fotograma 45 de un clip de 120 frames siempre produce introProgress = 0.375
// En una laptop de 2015 o en una workstation de 2026. Sin excepción.
update: (ctx) => {
  refs.title.style.opacity = ctx.timeline.introProgress; // Determinista
}
```

---

## Rendimiento de Exportación (ProRes 4444)

El renderizador headless opera con `concurrency: 1` — un fotograma a la vez — para garantizar la integridad del canal alfa en cada frame. Los tiempos reflejan esta configuración conservadora, optimizada para fidelidad sobre velocidad.

**Configuración de prueba:**
- Resolución: 1920×1080 @ 60 FPS
- Codec: Apple ProRes 4444 (`yuva444p10le`, 10-bit)
- Concurrencia: 1 (por diseño, para integridad alfa)
- Chromium: headless con `--force-cpu-rasterization`

| Complejidad | Duración del clip | Tiempo de exportación estimado |
| :--- | :--- | :--- |
| **Simple** (Lower Third básico, texto + línea) | 5 seg / 300 frames | ~2–4 segundos |
| **Media** (News Ticker con scroll, múltiples elementos) | 10 seg / 600 frames | ~5–8 segundos |
| **Compleja** (Visualización de datos, múltiples capas CSS) | 15 seg / 900 frames | ~10–15 segundos |

> Los tiempos varían según el hardware. El factor dominante es la velocidad de rasterización de Chromium headless, no la CPU del sistema.

---

## Persistencia Atómica — Resiliencia ante Fallos

El sistema de guardado usa escritura atómica asíncrona implementada en `project-manager.ts`:

```
1. Cambio detectado → debounce de 500ms
2. Escritura en archivo temporal: project.json.tmp
3. Solo si la escritura tiene éxito: fs.rename(tmp → project.json)
4. Si el proceso falla en cualquier punto: project.json original intacto
```

**Garantía:** Un cierre inesperado, fallo de energía o bloqueo del sistema durante el autoguardado **nunca corrompe** el archivo de proyecto. El archivo `.tmp` se descarta automáticamente en el siguiente inicio.

El debounce de `500ms` está implementado directamente en el store de Zustand (`useStore.ts`), acumulando cambios antes de cada escritura para minimizar operaciones de disco.

---

## Overhead del Sandbox de Seguridad

El sistema de aislamiento de plugins (Shadow DOM + `fakeWindow` Proxy) añade una capa de seguridad con impacto mínimo en el rendimiento:

| Componente | Implementación | Impacto en el loop de 60fps |
| :--- | :--- | :--- |
| **Shadow DOM** | `attachShadow({ mode: 'open' })` | Negligible — nativo del navegador |
| **fakeWindow Proxy** | Intercepta acceso a `window` real | < 0.1ms por fotograma |
| **Polyfill `getElementById`** | `shadowRoot.querySelector('#id')` | Equivalente al nativo |
| **Total overhead de seguridad** | — | **< 0.5ms por fotograma** |

La ventana disponible para el loop de preview a 60fps es de **16.6ms por fotograma**. El overhead del sandbox representa menos del 3% de ese presupuesto.

---

## Transparency Transformer — Canal Alfa ProRes

La exportación con canal alfa requiere una cadena de tres capas para garantizar transparencia real en DaVinci Resolve:

| Capa | Implementación | Propósito |
| :--- | :--- | :--- |
| **Chromium Flag** | `--transparent-background-color=0` | Fuerza fondo transparente en el proceso headless |
| **JS Injection** | `evaluatePage` → `body.style.backgroundColor = 'transparent'` | Garantiza transparencia antes de la captura del frame 0 |
| **Pixel Format** | `yuva444p10le` (ProRes 4444, 10-bit) | Preserva el canal alfa completo en el archivo `.mov` |

El **Frame 0 Fix** (v5.6.0) resuelve el bug donde el primer fotograma se capturaba antes de completar la hidratación de datos. Ahora el motor usa `delayRender` / `continueRender` de Remotion para pausar el renderizado hasta que los props estén disponibles, garantizando que el primer frame exportado sea idéntico al que se ve en la previsualización.

---

## Data Probe Hydration — Límite de CLI en Windows

Windows impone un límite de ~32.767 caracteres en argumentos de línea de comandos. Para plugins con HTML/CSS/JS extensos, pasar los datos por CLI causaba truncamiento silencioso.

**Solución implementada (v5.4.0+):**

```
Main Process → levanta servidor HTTP en 127.0.0.1:5555
RenderWrapper → fetch('http://127.0.0.1:5555/props.json')
Remotion      → recibe los datos completos sin límite de tamaño
Servidor      → se cierra automáticamente al finalizar el render
```

Este sistema elimina el límite de tamaño de datos y es transparente para el desarrollador de plugins.
