---
title: API de Extensión
description: Referencia técnica completa para el desarrollo de plugins para DVGE. Cubre dvEngine.register, el objeto ctx y todas las utilidades disponibles.
sidebar:
  order: 2
---

Cada plugin de DVGE se registra a través de la interfaz `dvEngine.register()`. Esta página es la referencia completa para construir gráficos compatibles y deterministas.

## `dvEngine.register(lifecycle)`

El punto de entrada para cualquier plugin. Llama a esto una vez en tu `script.js` con un objeto de ciclo de vida (lifecycle).

```javascript
dvEngine.register({
  awake: (ctx) => { /* ... */ },
  start: (ctx) => { /* ... */ },
  update: (ctx) => { /* ... */ }
});
```

---

## Hooks de Ciclo de Vida

### `awake(ctx)`
Llamado **una vez** cuando el plugin es montado. Úsalo para:
- Guardar en caché referencias del DOM en `ctx.refs`.
- Aplicar estilos base estáticos.
- Inicializar variables de estado en `ctx.state`.

```javascript
awake: (ctx) => {
  ctx.refs.title = ctx.root.getElementById('title');
  ctx.refs.bar = ctx.root.getElementById('bar');
  ctx.state.progress = 0;
}
```

### `start(ctx)`
Llamado cada vez que el cabezal de reproducción vuelve al **fotograma 0**. Úsalo para:
- Restablecer el estado acumulado.
- Disparar efectos de "primer fotograma".

### `update(ctx)`
Llamado en **cada fotograma** (60fps durante la previsualización). Úsalo para:
- Todo el enlace de datos (leyendo desde `ctx.props`).
- Toda la lógica de animación (leyendo desde `ctx.timeline`).

:::caution[Rendimiento]
Guarda en caché las referencias del DOM en `awake`. Nunca llames a `ctx.root.getElementById()` dentro de `update` — se ejecuta 60 veces por segundo.
:::

---

## El Objeto de Contexto (`ctx`)

Cada hook recibe el mismo objeto `ctx`:

| Propiedad | Tipo | Descripción |
| :--- | :--- | :--- |
| `ctx.frame` | `number` | Fotograma de animación actual (comienza en 0). |
| `ctx.timeline` | `object` | Ayudantes de sincronización normalizados (ver abajo). |
| `ctx.root` | `ShadowRoot` | La raíz aislada del Shadow DOM. **Usa siempre esto en lugar de `document`.** |
| `ctx.props` | `object` | Valores en vivo del formulario del inspector, indexados por los IDs del esquema de `manifest.json`. |
| `ctx.refs` | `object` | Tu propia caché de referencias del DOM (persistente a través de fotogramas). |
| `ctx.state` | `object` | Tu propio almacén de estado persistente (persistente a través de fotogramas). |
| `ctx.utils` | `object` | Biblioteca integrada de funciones matemáticas y de suavizado (easing). |
| `ctx.settings` | `object` | Metadatos del motor: `fps`, `duration`, `width`, `height`. |

**Valores de `ctx.settings`:**
```javascript
ctx.settings.fps        // number — fotogramas por segundo (ej. 60)
ctx.settings.duration   // number — duración total en fotogramas (ej. 120 para 2s a 60fps)
ctx.settings.width      // number — ancho del lienzo en píxeles (ej. 1920)
ctx.settings.height     // number — alto del lienzo en píxeles (ej. 1080)
```

---

## `ctx.timeline`

Reemplaza la aritmética directa de fotogramas con valores normalizados basados en intención.

| Propiedad | Tipo | Descripción |
| :--- | :--- | :--- |
| `timeline.progress` | `number [0–1]` | Progreso general del clip (0 = inicio, 1 = fin). |
| `timeline.isIntro` | `boolean` | `true` si el fotograma actual está dentro de la fase de entrada. |
| `timeline.isOutro` | `boolean` | `true` si el fotograma actual está dentro de la fase de salida. |
| `timeline.introProgress` | `number [0–1]` | Progreso local dentro de la fase de entrada. |
| `timeline.outroProgress` | `number [0–1]` | Progreso local dentro de la fase de salida. |

**Ejemplo — aparecer durante la entrada, desaparecer durante la salida:**
```javascript
update: (ctx) => {
  const { timeline, refs } = ctx;
  if (timeline.isIntro) refs.el.style.opacity = timeline.introProgress;
  if (timeline.isOutro) refs.el.style.opacity = 1 - timeline.outroProgress;
}
```

---

## `ctx.utils` — Biblioteca de Suavizado (Easing)

| Función | Firma | Descripción |
| :--- | :--- | :--- |
| `lerp` | `(a, b, t)` | Interpolación lineal. |
| `clamp` | `(val, min, max)` | Restringe un valor a un rango. |
| `spring` | `(t)` | Efecto de resorte con rebote. |
| `easeOutCubic` | `(t)` | Suavizado de salida fluido. |
| `easeInOutCubic` | `(t)` | Suavizado simétrico. |
| `easeOutBounce` | `(t)` | Rebote elástico al entrar. |
| `easeOutElastic` | `(t)` | Efecto elástico tipo resorte. |
| `hexToRgb` | `(hex)` | Devuelve un string `"r, g, b"` para usar en `rgba()` de CSS. |
| `typewriter` | `(text, frame, fps)` | Devuelve la subcadena visible para un efecto de máquina de escribir. |
| `tickerOffset` | `(frame, speed, cW, tW)` | Calcula el desplazamiento en X para una cinta de noticias infinita. |

---

## Referencia de `manifest.json`

```json
{
  "id": "mi-plugin",
  "name": "Mi Plugin",
  "version": "1.0.0",
  "description": "Una breve descripción del gráfico.",
  "presets": ["branding", "motion", "layout"],
  "schema": [
    { "type": "string", "id": "title", "label": "Título Principal", "defaultValue": "Hola" },
    { "type": "color", "id": "accent", "label": "Color de Acento", "defaultValue": "#E44C30" },
    { "type": "number", "id": "fontSize", "label": "Tamaño de Fuente (px)", "defaultValue": 48 },
    { "type": "image", "id": "logo", "label": "Imagen del Logo" }
  ]
}
```

### Tipos de Campos del Esquema
| Tipo | Control del Inspector | Notas |
| :--- | :--- | :--- |
| `string` | Entrada de texto | También se usa para múltiples líneas. |
| `color` | Selector de color | Devuelve una cadena hexadecimal. |
| `number` | Deslizador numérico | Devuelve un número. |
| `image` | Subida de archivo | Devuelve una URL de datos base64. |
| `code` | Editor de código | Devuelve una cadena de texto HTML cruda. |
| `prompt` | Zona draggable (PDF) | **v5.5.0** — Genera y expone el PDF de reglas del motor para drag-to-AI. |
| `artifact` | Zona de pegado universal | Acepta bloques `[[[HTML]]]`, `[[[CSS]]]`, `[[[JS]]]` de la IA y los distribuye automáticamente. |
| `info` | Texto de sólo lectura | Muestra información copiable al usuario (ej. prompts, IDs). |

### Banderas de Presets
| Preset | Campos Inyectados Automáticamente |
| :--- | :--- |
| `branding` | `logo` (image), `accentColor` (color) |
| `motion` | `entryDuration` (number), `exitDuration` (number) |
| `layout` | `position` (select: TL, TR, BL, BR, Center) |
