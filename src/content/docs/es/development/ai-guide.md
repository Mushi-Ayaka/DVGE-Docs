---
title: Crear Plugins con IA
description: Cómo usar asistentes de IA para generar plugins de DVGE listos para producción en minutos.
sidebar:
  order: 4
---

Los asistentes de programación modernos con IA pueden generar plugins completos y listos para producción para DVGE. A partir de **v5.5.0 GA**, el motor incluye el **Knowledge Bridge** — el método más rápido y preciso para dar contexto a cualquier IA.

## Método Recomendado: Knowledge Bridge (v5.5.0 GA)

El motor compila automáticamente todas sus reglas (Sandbox, Shadow DOM, API completa) en un archivo PDF. Al inyectarlo directamente en tu IA favorita, eliminas el 90% de los errores habituales de generación de código.

### Pasos
1. Abre el plugin **DVGE Studio Master** en cualquier proyecto.
2. En el inspector lateral, localiza el campo **"DVGE Master Rules"**.
3. **Arrastra** la zona indicada directamente al chat de tu IA (Claude, Gemini, ChatGPT).
4. El motor envía el PDF via drag nativo — la IA recibe el contexto completo del motor.
5. Describe el plugin que necesitas. La IA ya conoce todas las restricciones.

:::tip[Flujo Óptimo]
El PDF incluye ejemplos de código, la tabla de `ctx.utils`, los tipos del `schema` y las reglas del Sandbox. No necesitas repetir nada manualmente.
:::

---

## Método Manual: Prompt (v5.0.0+)

Si no tienes acceso al Knowledge Bridge, copia este bloque en cualquier asistente de IA.

Este prompt usa el modo **Smart Engine / Auto-Rescue**: en lugar del registro estándar `dvEngine.register()`, define una función global `window.renderDVGE` que el motor detecta y conecta automáticamente al ciclo de vida. Es el modo recomendado para código generado por IA porque tolera errores estructurales comunes. Para desarrollo manual de plugins, usa `dvEngine.register()` como se describe en la [Guía de Inicio Rápido](/development/quick-start/).

```text
Act as a senior Motion Graphics developer. Generate a plugin for the
DVGE engine v5.6.0 GA following these simplified rules:

SMART ENGINE COMPATIBILITY:
- Do NOT use dvEngine.register(). The engine will wrap your code.
- OBLIGATORY: Define the global function: 
  window.renderDVGE = (frame, props, ctx) => { ... }

TECHNOLOGY:
- Use ONLY HTML/CSS and Vanilla JavaScript.
- No time-based animation (requestAnimationFrame, Date.now() or GSAP).

API UTILITIES:
- Use ctx.utils.loop(frame, 180) for 3-second loops.
- Use ctx.utils.spring(t) for professional bouncing effects.
- Access the DOM via ctx.root.getElementById().

STYLE:
- Canvas is 1920x1080.
- Use .dv-glass class for premium glassmorphism.

Generate 4 files: manifest.json, index.html, style.css, script.js.

PLUGIN DESCRIPTION:
[Describe your graphic here]
```

---

## Cómo funciona el "Auto-Rescate"

Si la IA comete errores estructurales comunes, el motor los corrige en tiempo de ejecución:
- **Silenciador**: Si la IA intenta usar `requestAnimationFrame`, el motor lo anula automáticamente para proteger el determinismo.
- **Auto-Bridge**: Si la IA olvida el registro oficial, el motor busca `window.renderDVGE` y lo conecta al ciclo de vida por ti.
- **Contexto**: Recibes `frame`, `props` y `ctx` directamente en cada fotograma.

---

## Consejos de Prompting para Mejores Resultados

### Sé Específico sobre el Comportamiento de Animación
- **Evitar:** "Haz que se anime suavemente"
- **Ideal:** "Desliza desde la izquierda durante la fase de intro usando `ctx.timeline.introProgress` y `utils.lerp`"

### Especifica la Intención de Diseño (Layout)
- **Evitar:** "Pon el texto en la parte inferior"
- **Ideal:** "Posiciona la tarjeta en `bottom: 120px; left: 80px` usando posicionamiento absoluto"

### Define Campos Exactos del Esquema
- **Evitar:** "Añade campos de texto"
- **Ideal:** "Incluye estos campos de esquema: `name` (string), `role` (string), `accentColor` (color, valor predeterminado: #E44C30)"

---

## Validar Código Generado por IA

Antes de cargar un plugin generado en DVGE, revisa estos errores comunes de la IA:

| Problema | Código Incorrecto | Solución |
| :--- | :--- | :--- |
| Acceso al Documento | `document.getElementById('x')` | `ctx.root.getElementById('x')` |
| Animación en Tiempo Real | `gsap.to(el, {...})` | `utils.lerp(0, 1, ctx.timeline.introProgress)` |
| Uso de Temporizadores | `setTimeout(fn, 500)` | Lógica basada en `ctx.frame` |
| Importaciones CSS | `@import url(...)` | Incrustar estilos directamente en `style.css` |
| Scripts Externos | `<script src="...">` | Toda la lógica debe estar en `script.js` |

:::tip[Flujo de Trabajo Pro]
Pega la salida de la IA directamente en DVGE y revisa la consola de DevTools del navegador (`Ctrl+Shift+I`). El motor registrará cualquier violación del sandbox, facilitando su corrección.
:::
