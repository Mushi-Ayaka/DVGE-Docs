---
title: Inicio Rápido
description: Construye tu primer Template para DVGE desde cero. Pasa de cero a un gráfico broadcast en 5 minutos.
sidebar:
  order: 1
---

Esta guía te llevará paso a paso para crear tu primer **Template** (Plantilla de animación) de DVGE desde cero. No se requiere experiencia previa con el motor.

## Requisitos Previos
- DVGE v5.6.0+ instalado y ejecutándose.
- Un editor de texto (se recomienda VS Code).

---

## Paso 1: Crear la Carpeta del Template

Abre DVGE, ve a **Ayuda → Abrir Carpeta de Plugins**. Dentro de ese directorio, crea una nueva carpeta llamada `mi-primer-template`.

```
DVG_Plugins/
└── mi-primer-template/    ← Crea esta carpeta
    ├── manifest.json
    ├── index.html
    ├── style.css
    └── script.js
```

---

## Paso 2: El Manifiesto (`manifest.json`)

Este archivo es el descriptor. Le indica al motor qué tipo de módulo es (`type: "template"`) y qué propiedades expone al usuario.

```json
{
  "id": "com.dev.mi-primer-template",
  "name": "Mi Primer Template",
  "version": "1.0.0",
  "author": "Tu Nombre",
  "type": "template",
  "description": "Un tercio inferior (lower third) simple y animado.",
  "presets": ["branding", "motion"],
  "permissions": [],
  "schema": [
    {
      "type": "string",
      "id": "name",
      "label": "Nombre",
      "defaultValue": "Juan Pérez"
    },
    {
      "type": "string",
      "id": "role",
      "label": "Rol",
      "defaultValue": "Ingeniero Broadcast"
    }
  ]
}
```

---

## Paso 3: La Estructura (`index.html`)

Fragmento HTML crudo para tu gráfico. Sin etiquetas `<html>`, `<head>`, o `<body>`.

```html
<div id="card">
  <h1 id="name-el"></h1>
  <p id="role-el"></p>
</div>
```

---

## Paso 4: El Estilo (`style.css`)

Los estilos están limitados a un lienzo de 1920x1080. Utiliza posicionamiento absoluto.

```css
#card {
  position: absolute;
  bottom: 120px;
  left: 80px;
  padding: 20px 30px;
  background: rgba(0, 0, 0, 0.75);
  border-left: 5px solid var(--accent);
  border-radius: 4px;
}

#name-el {
  font-size: 48px;
  color: white;
  margin: 0;
}

#role-el {
  font-size: 28px;
  color: #ccc;
  margin: 0;
}
```

---

## Paso 5: La Lógica (`script.js`)

Punto de entrada al motor. Usa el método `awake` para guardar en caché (cachear) las referencias del DOM, y `update` para animarlas fotograma a fotograma.

```javascript
dvEngine.register({
  // Se ejecuta una vez. Guarda tus referencias DOM aquí — nunca en update.
  awake: (ctx) => {
    ctx.refs.nameEl = ctx.root.getElementById('name-el');
    ctx.refs.roleEl = ctx.root.getElementById('role-el');
    ctx.refs.card   = ctx.root.getElementById('card');
  },

  // Se ejecuta cada fotograma. Vincula datos y aplica animaciones.
  update: (ctx) => {
    const { timeline, utils, refs, props } = ctx;

    // 1. Siempre vincula los datos desde props
    refs.nameEl.innerText = props.name;
    refs.roleEl.innerText = props.role;

    // 2. Anima la entrada usando timeline (sin GSAP, sin setTimeout)
    const opacity = utils.easeOutCubic(timeline.introProgress);
    const xOffset = utils.lerp(-30, 0, timeline.introProgress);
    refs.card.style.opacity = opacity;
    refs.card.style.transform = `translateX(${xOffset}px)`;
  }
});
```

:::tip[La Regla de Oro]
Toda la lógica de animación debe basarse en `ctx.timeline` o `ctx.frame`. Esto es lo que hace que los renders de DVGE sean perfectos por fotograma cuando se exportan a ProRes 4444. Nunca uses `requestAnimationFrame`, `setTimeout`, o bibliotecas de tiempo real.
:::

---

## Paso 6: Cargar y Previsualizar

1. En DVGE, crea un **Nuevo Proyecto**.
2. Selecciona `Mi Primer Template` de la lista de plantillas disponibles en el Studio.
3. El gráfico debería aparecer inmediatamente en la ventana de vista previa.
4. Edita los campos de **Nombre** y **Rol** en el inspector — el gráfico se actualizará en tiempo real.

Acabas de construir tu primer gráfico listo para producción broadcast. 🎉
