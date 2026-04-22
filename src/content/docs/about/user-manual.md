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

A partir de v4.1.5, puedes ampliar tu biblioteca de gráficos con un solo clic:

1. En la pantalla de inicio, haz clic en **"🛍️ Catálogo de Plugins"**.
2. Explora todos los diseños disponibles en el repositorio oficial.
3. Haz clic en **"Instalar"** en cualquier gráfico que te guste.
4. El plugin aparecerá automáticamente en tu lista de plantillas de proyecto.

:::tip[Actualizaciones Automáticas]
Si un plugin instalado recibe una mejora, el Catálogo mostrará un botón de **"Actualizar"** — mantén tu biblioteca de gráficos siempre al día.
:::

---

## 2. Gestión de Proyectos

### Crear un Nuevo Proyecto
1. Ingresa un nombre para el proyecto.
2. Selecciona una **plantilla gráfica** (local o instalada desde el Catálogo).
3. Haz clic en **"Crear Proyecto"**.

### Acceder a Proyectos Recientes
Tus proyectos se guardan en **Documentos/DVG_Projects**. Cada tarjeta muestra la plantilla utilizada. Haz clic en **"Abrir"** para reanudar tu trabajo.

---

## 3. El Editor

### Panel de Propiedades
Modifica texto, colores e imágenes — los cambios son **instantáneos** en la vista previa.

- **Identidad de Marca (Branding)**: Si la plantilla lo admite, una sección de "Branding" te permite cargar tu logo y elegir su posición (ej. Abajo a la Derecha) con un solo clic.
- **Alineación**: Controla la posición global del gráfico sin tocar una sola línea de código.
- **Smart Engine (v4.1.5)**: El motor ahora corrige automáticamente pequeños errores en las plantillas de terceros, asegurando que tus gráficos siempre se vean bien.

### Seguridad de Datos
Gracias al **Guardado Atómico** (Atomic Saving), tu trabajo está protegido contra cierres inesperados. El indicador de guardado en la esquina inferior izquierda confirma cuando tu archivo está escrito de forma segura en el disco.

---

## 4. Exportación Profesional

1. Haz clic en **"Renderizar"** (Render).
2. El motor genera un video **ProRes 4444 con canal Alfa** (transparencia nativa).
3. **Arrastrar y Soltar**: Arrastra el archivo `.mov` exportado directamente desde la aplicación a tu línea de tiempo en **DaVinci Resolve, Premiere Pro o After Effects**.

La transparencia se preservará automáticamente — gracias al motor determinista, lo que ves en la previsualización es exactamente lo que obtienes en el archivo final.

---

## 5. Solución de Problemas

| Problema | Solución |
| :--- | :--- |
| Pantalla de vista previa en blanco | Abre las Herramientas de Desarrollador (`Ctrl+Shift+I`) y revisa la consola en busca de errores. |
| El plugin no aparece | Verifica que la carpeta del plugin contiene los 4 archivos requeridos. |
| Desincronización en el Render | Asegúrate de que el plugin no utilice bibliotecas de animación externas en tiempo real. |
| Error I/O al guardar | Confirma que la aplicación tiene permisos de escritura en tu carpeta de Documentos. |
