---
title: Arquitectura Central
description: Análisis profundo de la arquitectura del motor DVGE, la comunicación de procesos y el sandbox de seguridad.
sidebar:
  order: 1
---

El **Motor de Gráficos Vectoriales Dinámicos (DVGE)** está construido sobre una arquitectura híbrida de alto rendimiento diseñada para la confiabilidad en la transmisión profesional.

> [!NOTE]
> **VERSIÓN ACTUALIZADA (22-04-2026):** Si ves esta nota, la documentación está al día y los errores de caché se han resuelto.

## Modelo de Procesos Híbrido

La aplicación opera usando un modelo de proceso dual separado por un puente de comunicación interna (IPC). Esto asegura que las tareas pesadas de la interfaz de usuario no bloqueen la lógica central del motor.

| Proceso | Responsabilidades Principales | Tecnologías |
| :--- | :--- | :--- |
| **Renderizador (UI)** | Interfaz React, Estado Zustand, Previsualización 60FPS | React + Vite |
| **Principal (Backend)** | Gestor de Plugins, E/S de Archivos, Render Headless | Node.js + Electron |

Los procesos se comunican a través de un **Puente IPC** robusto que garantiza la integridad de los datos en cada fotograma.

### 1. Proceso Renderizador (Frontend)
Maneja la interfaz de usuario, la previsualización en tiempo real a 60FPS y la gestión de propiedades. Traduce el código del plugin en fotogramas visuales instantáneamente usando un mecanismo de **Hard Reset** para asegurar cero fugas de estado entre proyectos.

### 2. Proceso Principal (Backend)
Se ejecuta en un entorno Node.js y es responsable de:
- Leer y escribir archivos de proyecto.
- Orquestar el renderizado de video headless.
- Escanear el sistema en busca de plugins compatibles.
- Gestionar el Servidor Local WebSocket para integraciones externas.

---

## Sandbox de Seguridad y Aislamiento

DVGE v4.1.0 implementa una estrategia de seguridad de múltiples capas para asegurar que los plugins de terceros no puedan comprometer el sistema anfitrión.

### 1. Proxy `fakeWindow`
Los plugins no tienen acceso al objeto `window` real ni a las APIs de Electron. El motor inyecta un **Proxy** que restringe el acceso únicamente a los métodos permitidos y al Shadow DOM.

### 2. Encapsulación con Shadow DOM
Cada plugin se renderiza dentro de un **Shadow Root**. Esta tecnología asegura un aislamiento total de estilos:
- Ningún CSS de la aplicación afecta al plugin.
- Ningún CSS del plugin se filtra hacia la interfaz de la aplicación.
- El posicionamiento absoluto (1920x1080) se mantiene consistente en todos los entornos.

### 3. Sandbox de Ejecución
El código del plugin se evalúa utilizando un constructor `new Function` restringido que anula explícitamente el acceso a globales de Node/Electron como `process`, `require` y `globalThis`.

---

## Smart Engine: Capa de Auto-Rescate (v4.1.5)

La versión v4.1.5 introduce una capa de inteligencia entre el código del plugin y el motor de renderizado.

### Inteligencia de Inyección
Si un plugin (especialmente los generados por IA) no implementa el estándar `dvEngine.register`, el motor:
1.  Escanea el script en busca de funciones globales como `renderDVGE`, `update` o `draw`.
2.  Envuelve automáticamente la función detectada en un puente determinístico.
3.  Inyecta las dependencias necesarias (`frame`, `props`, `ctx`) de forma transparente.

### Neutralización de No-Determinismo
El Sandbox ahora intercepta llamadas a APIs de tiempo real como `requestAnimationFrame` y las anula silenciosamente. Esto fuerza a los desarrolladores a utilizar el tiempo basado en cuadros del motor, garantizando que el video exportado sea idéntico a la previsualización, sin importar el rendimiento del hardware.

---

## Persistencia Atómica (I/O)

Para prevenir la corrupción de proyectos, DVGE utiliza una estrategia de **E/S Asíncrona Atómica**:

1.  **Debouncing**: Los cambios se almacenan en un búfer durante 500ms para reducir las escrituras en disco.
2.  **Escritura Temporal**: El estado se escribe primero en un archivo `.tmp`.
3.  **Renombrado Atómico**: Sólo tras una escritura exitosa, el archivo `.tmp` reemplaza al `project.json` real.

Este flujo garantiza que una caída del sistema o un fallo de energía durante un autoguardado nunca destruirá el trabajo del usuario.
