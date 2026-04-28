---
title: Manual de Usuario
description: Guía completa para editores y productores. Aprende a crear, personalizar y exportar gráficos broadcast profesionales.
sidebar:
  order: 1
---

DVGE es una herramienta de producción diseñada para que editores, productores y creadores de contenido construyan, personalicen y exporten gráficos broadcast rápidamente — sin necesidad de conocimientos técnicos avanzados.

## El Flujo de Trabajo

Tres pasos desde la idea hasta el video final:

```
Explorar Catálogo → Crear Proyecto → Exportar y Usar
```

---

## 1. El Catálogo de Plugins

A partir de v5.5.0, puedes ampliar tu biblioteca de gráficos con un solo clic:

1. En la pantalla de inicio, haz clic en **"🛍️ Catálogo de Plugins"**.
2. Explora todos los diseños disponibles en el repositorio oficial.
3. Haz clic en **"Instalar"** en cualquier gráfico que te guste.
4. El plugin aparecerá automáticamente en tu lista de plantillas de proyecto.

:::tip[Actualizaciones Automáticas]
Si un plugin instalado recibe una mejora, el Catálogo mostrará un botón de **"Actualizar"** — mantén tu biblioteca de gráficos siempre al día.
:::

---

## 2. Gestión de Proyectos (v5.6.0)

A partir de la versión 5.6, tienes control total sobre tu flujo de trabajo directamente desde la Galería de Proyectos:

### Crear un Nuevo Proyecto
1. Ingresa un nombre para el proyecto.
2. Selecciona una **plantilla gráfica** (local o instalada desde el Catálogo).
3. Haz clic en **"Crear Proyecto"**.

### Organización y Mantenimiento
- **Renombrar Proyectos**: Haz clic en el botón de configuración (engranaje) de cualquier tarjeta para cambiar el nombre del proyecto. El sistema renombrará la carpeta en el disco de forma segura.
- **Eliminar Proyectos**: Limpia tu espacio de trabajo eliminando proyectos antiguos o erróneos directamente desde la Galería.
- **Control de Integridad**: Si un plugin necesario para un proyecto ha sido borrado o movido, verás un aviso de **"MISSING PLUGIN"**. El motor bloqueará la apertura de ese proyecto para proteger la estabilidad de la aplicación hasta que el plugin sea restaurado.

---

## 3. El Editor

### Panel de Propiedades
Modifica texto, colores e imágenes — los cambios son **instantáneos** en la vista previa.

- **Identidad de Marca (Branding)**: Si la plantilla lo admite, una sección de "Branding" te permite cargar tu logo y elegir su posición (ej. Abajo a la Derecha) con un solo clic.
- **Alineación**: Controla la posición global del gráfico sin tocar una sola línea de código.
- **Transparency Transformer (v5.4.0)**: El motor ahora garantiza una transparencia perfecta y profesional para broadcast, eliminando artefactos y fondos negros accidentales.

### Seguridad de Datos
Gracias al **Guardado Atómico** (Atomic Saving), tu trabajo está protegido contra cierres inesperados. El indicador de guardado en la esquina inferior izquierda confirma cuando tu archivo está escrito de forma segura en el disco.

---

## 4. Exportación Profesional

1. Haz clic en **"Renderizar"** (Render).
2. El motor genera un video **ProRes 4444 con canal Alfa** (transparencia nativa).
3. **Arrastrar y Soltar**: Arrastra el archivo `.mov` exportado directamente desde la aplicación a tu línea de tiempo en **DaVinci Resolve, Premiere Pro o After Effects**.

:::important[Tip para DaVinci Resolve]
Si al importar el video ves un fondo negro, haz clic derecho sobre el clip en el **Media Pool** → **Clip Attributes** → Pestaña **Video** → Cambia **Alpha Mode** a **"Straight"** o **"Premultiplied"**.
:::

La transparencia se preservará automáticamente — gracias al motor determinista, lo que ves en la previsualización es exactamente lo que obtienes en el archivo final.

---

## 5. Knowledge Bridge AI (v5.5.0)

El nuevo flujo de trabajo para generar gráficos con asistentes de IA:

1. Abre cualquier proyecto con el plugin **"DVGE Studio Master"**.
2. En el panel de propiedades, localiza el campo **"DVGE Master Rules"**.
3. **Arrastra** la zona indicada directamente al chat de tu IA (Claude, Gemini, ChatGPT).
4. El motor entrega un PDF con todas las reglas del sandbox — la IA genera el plugin correcto al primer intento.
5. Pega la respuesta en el campo **"Artefacto Universal"** del inspector — el motor extrae el HTML, CSS y JS automáticamente.

:::tip[Sin copiar texto]
El Knowledge Bridge usa drag nativo de Electron. No necesitas copiar ni pegar el texto de las reglas — el PDF lo hace todo.
:::

---

## 6. Solución de Problemas

| Problema | Solución |
| :--- | :--- |
| Pantalla de vista previa en blanco | Abre las Herramientas de Desarrollador (`Ctrl+Shift+I`) y revisa la consola en busca de errores. |
| El plugin no aparece | Verifica que la carpeta del plugin contiene los 4 archivos requeridos. |
| Desincronización en el Render | Asegúrate de que el plugin no utilice bibliotecas de animación externas en tiempo real. |
| Error I/O al guardar | Confirma que la aplicación tiene permisos de escritura en tu carpeta de Documentos. |
