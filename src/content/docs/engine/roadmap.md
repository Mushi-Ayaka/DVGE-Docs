---
title: Hoja de Ruta (Roadmap)
description: El pasado, presente y futuro del Motor de Gráficos Vectoriales Dinámicos.
sidebar:
  order: 3
---

DVGE ha evolucionado de ser una simple herramienta de previsualización a un motor robusto de calidad broadcast. Hacia aquí nos dirigimos.

## Estado Actual: v4.1.0 GA (Disponibilidad General)
El motor se encuentra actualmente en su versión más estable y segura hasta la fecha.
- **Mercado de Plugins**: Instala gráficos directamente desde la aplicación.
- **Sandbox de Seguridad**: Aislamiento total del código de terceros.
- **Motor Determinista**: Lógica de renderizado con precisión de fotogramas.
- **Soporte ProRes 4444**: Exportación de video nativa con canal alfa.

---

## Horizonte Futuro: Motor de Siguiente Generación

La próxima actualización importante (v5.0) se enfoca en expandir el poder creativo del motor manteniendo sus estrictos estándares de confiabilidad.

### 1. Flujos de Trabajo Basados en Datos
Actualmente, las propiedades se editan manualmente en el inspector. Estamos trabajando en:
- **Inyección de Datos Externos**: Soporte para archivos CSV/JSON para generar múltiples versiones de un gráfico automáticamente (ej., 50 tercios inferiores para los créditos finales).
- **Fuentes en Vivo**: Integración con APIs externas (como marcadores deportivos o datos electorales) para actualización de gráficos en tiempo real durante la transmisión.

### 2. Kit Vectorial Nativo (`svg-kit`)
Una nueva capa de API para hacer que la animación vectorial sea fácil:
- **`animateStroke`**: Animar trazos SVG programáticamente sin manipulación directa de cadenas de texto.
- **Aislamiento de Canvas SVG**: Un canvas dedicado de 1920x1080 con funciones de ayuda para dibujar e interpolar formas.

### 3. Disparadores Interactivos (`ctx.triggers`)
Soporte para eventos de interacción en vivo:
- **Botones de Acción**: Botones personalizados en el inspector que activan eventos específicos del plugin (ej., agregar un punto a un marcador).
- **Historial de Disparos**: Cada clic se registra como un evento específico del fotograma, asegurando que la acción sea reproducible durante el render final.

### 4. Presets Avanzados
Expansión del esquema del manifiesto para incluir:
- `3d-canvas`: Integración básica de Three.js dentro del sandbox.
- `physics-engine`: Físicas de cuerpo rígido simplificadas para una sensación de movimiento "premium".

---

## Deuda Técnica y Mantenimiento
También estamos comprometidos con el endurecimiento interno continuo:
- **Expansión I/O Atómico**: Avanzando hacia un sistema de proyectos respaldado por base de datos, aún más resistente.
- **Perfilado de Rendimiento**: Reduciendo los tiempos de renderizado headless en un 20% adicional a través de caché de fotogramas binario.
