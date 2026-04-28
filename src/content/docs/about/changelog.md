---
title: Changelog (Registro de Cambios)
description: Historial completo de versiones para el Dynamic Vector Graphics Engine (DVGE).
sidebar:
  order: 2
---

Todos los cambios notables en DVGE están documentados aquí. El versionado sigue el estándar [Semantic Versioning](https://semver.org/).

---

## [5.6.0] — 2026-04-26 ✦ Versión Actual
### Gestión de Proyectos & Autonomía (The Freedom Update)
- **Auto-Fetch de Dependencias (Chromium & FFmpeg)**: El motor ahora detecta y descarga automáticamente sus propios motores de renderizado en `%APPDATA%\DVGE\bin`, eliminando la dependencia de Chrome instalado globalmente.
- **Gestión Integral de Proyectos**: Nueva interfaz en la Galería que permite renombrar y eliminar proyectos de forma atómica y segura mediante IPC.
- **Control de Integridad de Plugins**: El sistema ahora detecta plugins faltantes o corruptos antes de abrir el editor, mostrando badges de error y bloqueando el acceso para evitar cierres inesperados.
- **Estabilización del Frame 0**: Corrección crítica en `RenderWrapper` para asegurar que las propiedades se inyecten antes de la captura del primer fotograma, eliminando el parpadeo transparente.
- **Identidad Solo Developer**: Actualización de la narrativa de la landing y documentación para reflejar su naturaleza independiente y compromiso de certificación futura.

---

## [5.5.0] — 2026-04-23
### GA Artifact Edition (Knowledge Bridge)
- **Knowledge Bridge Nativo**: El motor genera un archivo `DVGE-Master-Rules.pdf` en caché y lo expone como zona de arrastre en el inspector del plugin "DVGE Studio Master". Al arrastrar directamente al chat de una IA (Claude, Gemini, ChatGPT), el asistente recibe el contexto completo del motor — reglas del Sandbox, API de `ctx`, restricciones del Shadow DOM y tabla de utilidades — sin necesidad de copiar texto.
- **Auto-Generador PDF Interno**: Una ventana silenciosa de Electron compila las reglas del motor a un archivo PDF temporal en caché (`%TEMP%/DVGE-Master-Rules.pdf`), eludiendo las restricciones de texto plano de las interfaces de IA.
- **Studio Master Refactor**: El plugin "DVGE Studio Master" incorpora soporte estandarizado para el campo `prompt`, manteniendo la fidelidad de la interfaz de usuario.

## [5.4.0] — 2026-04-23
### Estabilización de Producción y Canal Alfa (The Alpha Fix)
- **Transparency Transformer**: Implementación de flags críticos de Chromium (`--transparent-background-color=0`) y `evaluatePage` para garantizar transparencia real en ProRes 4444.
- **Data Probe System**: Nuevo sistema de inyección de datos vía endpoint interno (`/props.json`) para evitar pérdida de efectos complejos por límites de CLI en Windows.
- **Engine Compatibility**: Polyfill de `getElementById` en el contenedor root de plugins para soportar lógica heredada y compleja.
- **Chrome System Bypass**: Forzado de uso del ejecutable de Chrome del sistema para mayor fiabilidad en entornos Windows.
- **Optimización DaVinci**: Ajuste de pixel format a `yuva444p10le` con metadatos de transparencia verificados.

---

## [5.3.0] — 2026-04-23
### Auditoría de Infraestructura y Estabilización (Kernel Hardening)
- **Resolución definitiva de "Black Background"**: Diagnóstico del problema de transparencia en ProRes 4444 y restauración del canal alfa profesional para broadcast.
- **Bypass de Chrome de Sistema**: Uso del binario oficial de Google Chrome en lugar de `chrome-headless-shell` de Remotion, resolviendo fallos de captura silenciosos.
- **Kernel Logging (Caja Negra)**: Sistema de registro físico (`render_debug.log`) que captura peticiones del servidor interno, errores 404 y logs de consola en tiempo real.
- **Hardening de Rasterización**: Forzado de flags de CPU (`--force-cpu-rasterization`) para garantizar la captura de frames ante fallos de drivers de GPU en Windows.

---

## [5.2.0] — 2026-04-23
### Aislamiento "Muro de Hierro" (Bug Purge)
- **Servidor de Aislamiento Manual**: Servidor HTTP independiente (`serve()`) para el renderizado headless, eliminando el conflicto con el puerto 3000 de Vite que causaba el "Fondo Negro".
- **Naming Convention Strict**: Migración de IDs de composición a `kebab-case` para cumplir con las validaciones de Remotion 4.x.
- **Motor Síncrono Determinista**: Refactorización de `RenderWrapper` para garantizar que la inyección del DOM ocurra de forma atómica antes de la captura del frame.
- **Transparencia Nativa**: Restauración del canal alfa real para exportaciones ProRes 4444.

---

## [5.1.0] — 2026-04-23 (GA)
### Motor de Renderizado de Nueva Generación (Zero-Bundle Runtime)
- **Arquitectura Zero-Bundle**: Eliminación de `@remotion/bundler` del runtime. El entry point de Remotion se pre-compila en tiempo de build, reduciendo el instalador de 12,466 archivos a un único `app.asar`.
- **Instalación Rápida**: El tiempo de instalación pasa de minutos a segundos.
- **`binariesDirectory` Explícito**: Los binarios nativos (`remotion.exe`, `ffmpeg.exe`) se resuelven desde `app.asar.unpacked`, eliminando errores `ENOENT` en producción.
- **CWD Seguro**: El proceso de renderizado redirige el directorio de trabajo a `%TEMP%`, evitando errores `EPERM`.
- **Compatibilidad Total**: El render en `npm run dev` y en producción es idéntico. Sin cambios en la API de plugins.

---

## [5.0.0] — 2026-04-22 (GA)
### Smart Engine & Auto-Rescue
- **Capa de Inteligencia (Auto-Rescate)**: El motor detecta y envuelve automáticamente scripts que no sigan el estándar de registro oficial (detectando funciones globales como `update` o `renderDVGE`).
- **Sandbox Resiliente**: `fakeWindow` inteligente que silencia `requestAnimationFrame`, protegiendo la integridad del renderizado ProRes 4444.
- **Simplificación de API**: Introducción de `ctx.utils.loop(frame, duration)` para animaciones cíclicas perfectas.
- **AI-Native Workflow**: Tasa de éxito "One-Shot" significativamente mayor al ejecutar código generado por IA.

---

## [4.1.0] — 2026-04-21 (GA)
### Catálogo de Plugins & Ecosystem
- **Catálogo Integrado**: Nuevo panel para descubrir y descargar plugins directamente desde el repositorio oficial de GitHub.
- **Gestión Dinámica**: Instalación, actualización y borrado de plugins desde la UI.
- **Identidad Profesional**: Redes sociales (GitHub, Portafolio) y contacto directo vía Gmail en el modal "Acerca de".

---

## [4.0.0] — 2026-04-21 (GA)
### QA Remediation & GA Architecture
- **Sandbox Aislado**: Los plugins se ejecutan con `fakeWindow` sin acceso a APIs de Electron.
- **I/O Seguro**: Autoguardado asíncrono y atómico (`.tmp`), impidiendo corrupción de proyectos.
- **Graceful Degradation**: Aislamiento de crashes en el código del plugin sin congelar la app.
- **Error Boundary Reactivo**: Interfaz protegida contra `manifest.json` malformados.
- **API Determinística**: Deprecado GSAP en favor de `ctx.timeline`. Añadidos `ctx.state`, `ctx.refs`, `utils.spring`, `utils.typewriter`, `utils.tickerOffset`.

---

## [3.3.0] — 2026-04-21
### Editor Edition (HTML-a-Video Profesional)
- **Campos de Código**: Edición multilínea de HTML/CSS directamente en el sidebar con campos tipo `code`.
- **Plugin HTML Master Renderer**: Plantilla de alto rendimiento para renderizar código HTML puro.
- **Guardado Manual**: Botón en el sidebar para forzar escritura en disco del proyecto.

---

## [3.2.1] — 2026-04-21
### Corrección Crítica — Motor de Plugins Universal
- **Bug Resuelto**: El motor mostraba siempre la forma del primer plugin cargado al cambiar de proyecto; los campos del formulario tampoco se actualizaban.

### Motor de Plugins Dinámico
- **Formulario Generativo**: El panel lateral lee el `manifest.json` del plugin activo y genera dinámicamente los inputs correctos (`string`, `color`, `number`, `image`).
- **Plugin Badge**: El sidebar muestra el nombre y versión del plugin activo.
- **Hard Reset en Cambio de Proyecto**: El reproductor se destruye y recrea completamente al cambiar de proyecto.

---

## [3.1.0] — 2026-04-21
### Core & Developer Experience (DX)
- **Librería de Utilidades Nativa (`dvEngine.utils`)**: Funciones matemáticas (`lerp`, `clamp`) y de suavizado (`easeOutCubic`, `easeOutBounce`, etc.) inyectadas automáticamente.
- **Autoguardado Silencioso**: Persistencia automática basada en debouncing de 500ms.
- **Indicador de Persistencia**: UI en el panel lateral que muestra el estado del guardado en tiempo real.

---

## [3.0.0] — 2026-04-21
### Arquitectura de Espacios de Trabajo (Workspace Architecture)
- **Project Manager Backend**: Soporte de proyectos persistentes en `Documents/DVG_Projects/<id>`.
- **Inyección V3 Lifecycle**: Migración obligatoria a `{ awake, start, update }` para rendimiento máximo a 60fps.
- **Enlace Reactivo Nativo**: Las variables de la UI ahora impactan directamente el ciclo `update()`.

---

## [2.3.0] — 2026-04-21
### Arquitectura Hot-Swap
- **Stable Bridge Pattern**: Gestión de eventos centralizada fuera del script del plugin para evitar fugas de memoria.
- **Detección de Fugas**: Limpieza automática del Shadow DOM y callbacks antes de cada recarga.
- **Sync Dual**: Diferenciación entre actualización de datos (Soft-Sync) y recarga de lógica (Hard-Sync).

---

## [2.2.0] — 2026-04-21
### Añadido
- **API `dvEngine.register`**: Nuevo método oficial para sincronizar frames y recibir el Shadow Root de forma segura.
- **Retrocompatibilidad**: Soporte para scripts heredados que usan `window.dvContext` y `renderFrame()`.

### Corregido
- **Black Screen Fix**: Consolidación del ciclo de vida del `PluginWrapper` para evitar colapsos en la inicialización del Shadow DOM.
- **Reactividad Total**: Los cambios en el panel lateral se reflejan instantáneamente en tiempo real.

---

## [2.0.0] — "The Genetic Revolution"
- Migración de plantillas estáticas React a un motor de inyección dinámica mediante Shadow DOM.
- Sistema IPC para carga de plugins externos desde `Documentos/DV_Engine_Plugins`.
- Sincronización determinista a 60fps basada en eventos `dv-update`.

---

## [1.0.0] — "The Native Era"
- Versión inicial con componentes `LowerThirdBasic` cableados en React.
- Renderizado ProRes 4444 básico.
