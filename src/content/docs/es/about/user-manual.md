---
title: Manual de Usuario
description: Guía completa para editores y productores. Aprende a crear, personalizar y exportar gráficos broadcast profesionales con Ember Motion Studio™.
sidebar:
  order: 1
---

> **Aviso legal del proyecto:** DVGE y Ember Motion Studio™ son proyectos de código abierto y sin finalidad lucrativa. El código fuente está disponible bajo la Licencia MIT. El símbolo ™ identifica la marca del proyecto y no cambia la licencia del software.

**Ember Motion Studio™** (v5.9.1) es una herramienta de producción diseñada para que editores, productores y creadores de contenido construyan, personalicen y exporten gráficos broadcast rápidamente. El sistema está impulsado por el motor de renderizado determinista **Ember**.

## El Flujo Maestro (5 Pasos)

Para dominar el Studio, recomendamos seguir este flujo de trabajo estandarizado:

1.  **Configuración del Canvas**: Define las dimensiones (16:9, 9:16, etc.), la duración y los FPS de tu proyecto.
2.  **Gestión de Artefactos**: Agrega imágenes, videos o bases de datos (Excel/CSV). Asegúrate de poner títulos y descripciones claras; la IA usará esta información para entender cómo usar cada recurso.
3.  **AI Context Builder**: Genera el manual de reglas técnico (PDF) y arrástralo a tu chat de IA favorito (Claude, GPT o **DeepSeek en Modo Experto**).
4.  **Refinamiento Visual**: Una vez generado el código, ajusta los valores en el **Inspector** en tiempo real para pulir los detalles.
5.  **Exportación e Iteración**: Renderiza tu video o vuelve al Builder para incluir el código actual y pedir modificaciones a la IA.

---

## 1. El Catálogo de Plugins

Amplía tu biblioteca de gráficos con un solo clic:

1.  En la pantalla de inicio, haz clic en **"🛍️ Catálogo de Plugins"**.
2.  Explora los diseños disponibles en el repositorio oficial.
3.  Haz clic en **"Instalar"** y el plugin aparecerá automáticamente en tu lista de plantillas.

:::tip[Smart Tip]
Si no sabes por dónde empezar, el sistema mostrará un recordatorio sutil en el Studio señalando la **Guía Rápida**. Puedes ocultarlo permanentemente marcando "No volver a mostrar".
:::

---

## 2. Gestión de Proyectos (Galería)

- **Crear Proyecto**: Elige un nombre, una plantilla base y comienza.
- **Control de Integridad**: Si falta un plugin necesario, verás un aviso de **"MISSING PLUGIN"**. No podrás abrir el proyecto hasta restaurar el plugin para evitar fallos técnicos.

---

## 3. El Editor y el Flujo Vibe Motion

### Flujo Vibe Motion (Knowledge Bridge)
El corazón del diseño ágil asistido por IA:

> [!NOTE]  
> **Sin IA Integrada:** Ember Motion Studio™ es un entorno de ejecución y sandbox de altísimo rendimiento. **No** incluye un modelo de IA local o chat integrado dentro del software. Esto mantiene la aplicación extremadamente ligera, libre de suscripciones de API, y te permite usar siempre el modelo externo más avanzado (como Claude 3.5 Sonnet o GPT-4o) sin restricciones de hardware de tu PC.

*   **Arrastrar y Soltar:** Arrastra la zona del Builder directamente a tu chat de IA favorito (Claude, GPT-4, etc.). El PDF exportado contiene las reglas del motor, la especificación de tus artefactos y los límites del Sandbox.
*   **Modo Experto:** Pídele a la IA externa que genere el código para el plugin basándose estrictamente en las reglas del PDF. Copia el resultado y pégalo en el editor.

### Inspector Dinámico
- **Cambios Instantáneos**: Cualquier ajuste en el Inspector se refleja de inmediato en el Canvas.
- **Artifact Linking**: Puedes vincular campos del inspector directamente a tus artefactos (ej. usar una imagen cargada en la galería como fondo).

---

## 4. Exportación Broadcast

1.  Haz clic en **"RENDER VIDEO"**.
2.  Elige el formato: **ProRes 4444** (con transparencia), **H.264** (MP4) o **GIF**.
3.  **Arrastrar y Soltar**: Una vez finalizado, arrastra el archivo directamente a tu editor (Premiere, DaVinci, After Effects).

:::important[Transparencia en DaVinci Resolve]
Si el video ProRes aparece con fondo negro: Clic derecho sobre el clip → **Clip Attributes** → **Video** → Cambia **Alpha Mode** a **"Straight"**.
:::

(Actualizado para v5.9.1 Stable Release)
