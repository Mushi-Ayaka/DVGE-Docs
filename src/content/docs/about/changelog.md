---
title: Changelog (Registro de Cambios)
description: Historial completo de versiones para el Dynamic Vector Graphics Engine (DVGE).
sidebar:
  order: 2
---

Todos los cambios notables en DVGE están documentados aquí. El versionado sigue el estándar [Semantic Versioning](https://semver.org/).

## [4.1.5] — 2026-04-22 (GA Actual)
### Smart Engine y Capa de Auto-Rescate
- **Motor Inteligente**: Detección y auto-envoltura de scripts mal formados. El motor ahora rescata plugins que no sigan el estándar de registro oficial.
- **Sandbox Resiliente**: Silenciamiento de llamadas no determinísticas (`requestAnimationFrame`) para proteger la integridad del renderizado.
- **Simplificación de API**: Nueva utilidad `ctx.utils.loop(frame, duration)` para loops perfectos.
- **Flujo AI 'One-Shot'**: Optimización de la tasa de éxito al ejecutar código generado por LLMs.

---

## [4.1.0] — 2026-04-21 ✅

### Catálogo de Plugins y Ecosistema
- **Catálogo Integrado**: Nuevo panel para descubrir y descargar plugins directamente desde el repositorio oficial de GitHub.
- **Gestión Dinámica**: Instalación, actualización y eliminación de plugins a través de la interfaz (UI).
- **Identidad Profesional**: Enlaces sociales (GitHub, Portafolio) y contacto directo por Gmail en el modal "Acerca de".

---

## [4.0.0] — 2026-04-21

### Remediación QA y Arquitectura GA
- **Caja de Arena Sellada (Sandbox)**: Los plugins ahora se ejecutan con un proxy `fakeWindow` — cero acceso a APIs de Electron o Node.
- **E/S Atómica (Atomic I/O)**: Guardado automático atómico asíncrono (`.tmp` + renombrado) evita la corrupción del archivo del proyecto en apagados bruscos.
- **Degradación Elegante**: Los cierres inesperados (crashes) de plugins se aíslan sin congelar el bucle principal de la aplicación.
- **Límite de Errores Reactivo (Error Boundary)**: La UI está protegida contra archivos `manifest.json` mal formados.
- **API Determinista**: Bibliotecas en tiempo real (GSAP) desaprobadas en favor de `ctx.timeline` (matemática de fotogramas). Añadidos `ctx.state`, `ctx.refs`, `utils.spring`, `utils.typewriter`, `utils.tickerOffset`.

---

## [3.3.0] — 2026-04-21

### Edición del Editor
- **Campos de Código**: Edición de HTML/CSS multilínea directamente en la barra lateral mediante campos de esquema tipo `code`.
- **Renderizador Maestro HTML**: Plantilla oficial de alto rendimiento para renderizar código HTML crudo.
- **Guardado Manual**: Nuevo botón en la barra lateral para forzar una escritura inmediata en el disco junto al sistema de autoguardado.

---

## [3.2.1] — 2026-04-21

### Corrección de Bug Crítico — Motor de Plugins Universal
- **Corregido**: El motor mostraba previamente la forma del primer plugin cargado al cambiar de proyecto. Los campos del formulario también fallaban al actualizarse al cambiar de proyecto.

### Motor Dinámico de Plugins
- **Formularios Generativos**: La barra lateral ya no tiene campos fijos. Lee el `manifest.json` del plugin activo y genera dinámicamente los inputs correctos.
- **Insignia del Plugin**: La barra lateral muestra el nombre y versión del plugin activo.
- **Reinicio Forzado al Cambiar Proyecto**: El reproductor de vista previa se destruye completamente y se recrea al cambiar de proyecto (`key={activeProject.id}`), eliminando cualquier residuo visual o de estado.

---

## [3.1.0] — 2026-04-21

### Núcleo y Experiencia de Desarrollador (DX)
- **Biblioteca de Utilidades Nativa (`dvEngine.utils`)**: Inyección automática de funciones matemáticas (`lerp`, `clamp`) y curvas de suavizado (`easeOutCubic`, `easeOutBounce`, etc.).
- **Autoguardado Silencioso**: Persistencia automática con debouncing de 500ms — no requiere acción del usuario.
- **Indicador de Persistencia**: Nuevo elemento UI que muestra el estado de guardado en tiempo real ("Guardando..." / "Guardado a las HH:MM").

---

## [3.0.0] — 2026-04-21

### Arquitectura del Espacio de Trabajo (Workspace)
- **Backend del Gestor de Proyectos**: Núcleo rediseñado para admitir proyectos persistentes en `Documentos/DVG_Projects/<id>`.
- **Inyección de Ciclo de Vida V3**: Migración obligatoria a `{ awake, start, update }` para rendimiento máximo de 60fps.
- **Vinculación Reactiva Nativa**: Las variables de UI ahora impactan directamente el ciclo `update()` para una reactividad inmediata.

---

## [2.3.0] — 2026-04-21

### Arquitectura de Intercambio en Caliente (Hot-Swap)
- **Patrón Puente Estable (Stable Bridge)**: Gestión de eventos centralizada para evitar fugas de memoria.
- **Detección de Fugas**: Limpieza automática del Shadow DOM y devoluciones de llamada (callbacks) antes de cada recarga de código.
- **Sincronización Dual**: Diferenciación entre actualización de datos (Soft-Sync) y recarga lógica (Hard-Sync).

---

## [2.2.0] — 2026-04-21

### Añadido
- **API `dvEngine.register`**: Nuevo método oficial para sincronizar fotogramas y recibir de manera segura el Shadow Root.
- **Compatibilidad con Versiones Anteriores**: Soporte para scripts heredados que usan `window.dvContext` y `renderFrame()`.

### Corregido
- **Corrección de Pantalla Negra**: Consolidación del ciclo de vida de `PluginWrapper` para prevenir bloqueos (crashes) de inicialización del Shadow DOM.
- **Reactividad Completa**: Los cambios en la barra lateral (título, color, etc.) ahora se reflejan al instante en tiempo real.

---

## [2.0.0] — "La Revolución Genética"
- Migración de plantillas estáticas de React a un motor de inyección dinámica a través de Shadow DOM.
- Sistema de comunicación IPC para cargar plugins externos desde `Documentos/DV_Engine_Plugins`.
- Sincronización determinista a 60fps basada en eventos `dv-update`.

## [1.0.0] — "La Era Nativa"
- Versión inicial con componentes React hardcodeados `LowerThirdBasic`.
- Renderizado básico ProRes 4444.
