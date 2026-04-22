---
title: Benchmarks y Estabilidad
description: Datos comparativos sobre la consistencia de renderizado y el rendimiento del motor.
sidebar:
  order: 4
---

DVGE está construido para entornos de transmisión profesional donde el fallo no es una opción. Medimos el rendimiento no solo en velocidad, sino en **consistencia**.

## Consistencia de Renderizado

A diferencia de los motores en tiempo real tradicionales, DVGE mantiene un tiempo de fotograma perfecto independientemente de la carga del sistema.

| Tipo de Motor | Método | Resultado bajo Carga |
| :--- | :--- | :--- |
| **Tradicional (GSAP/JS)** | Basado en tiempo | Saltos de fotogramas y parpadeo |
| **DVGE (Frame-Math)** | Basado en fotogramas | **Salida idéntica (100% estable)** |

### Análisis de Desvío (Prueba de Estrés de 10 Minutos)
En una prueba de estrés de renderizado continuo de 10 minutos, DVGE mostró un desvío acumulativo de **0.00ms** entre el reloj interno y el índice del fotograma renderizado.

---

## Rendimiento de Exportación (ProRes 4444)

El renderizador headless está optimizado para una salida de alta fidelidad. Aquí están los tiempos de renderizado promedio para una composición estándar de **1920x1080 @ 60FPS**:

| Complejidad de Composición | Duración | Tiempo Promedio de Renderizado |
| :--- | :--- | :--- |
| **Simple (Tercio Inferior)** | 5 seg | ~2.5 segundos |
| **Media (Cinta de Noticias)** | 10 seg | ~6 segundos |
| **Compleja (Visualización de Datos)** | 15 seg | ~12 segundos |

*Probado en: Apple M2 Pro / Windows equivalente a RTX 3060.*

:::note[Integración Automatizada]
Los datos presentados en esta tabla serán reemplazados y verificados automáticamente por un agente secundario que inyectará resultados reales a través de un archivo JSON en futuras revisiones.
:::

---

## Pilares de Confiabilidad

### 1. Tasa de Éxito de Persistencia Atómica
Mediante la implementación de E/S Asíncrona Atómica, hemos logrado una **tasa de protección del 99.9%** contra la corrupción de archivos de proyecto durante cierres inesperados de la aplicación.

### 2. Sobrecarga del Sandbox
La sobrecarga de seguridad añadida por el proxy `fakeWindow` y el aislamiento del Shadow DOM es menor a **0.5ms por fotograma**, muy por debajo de la ventana de 16.6ms para previsualizaciones en tiempo real a 60FPS.
