---
title: Referencia del Manifest (v5.x)
description: Estructura y opciones de configuración para el manifest.json bajo la nueva taxonomía (Templates, Tools, Extensions).
sidebar:
  order: 2
---

El archivo `manifest.json` es el corazón de cualquier componente en el ecosistema DVGE. A partir de la versión 5.x, DVGE implementa una taxonomía estricta para diferenciar el propósito de cada módulo y garantizar la seguridad del usuario.

## Estructura Base

Todo `manifest.json` debe contar con la siguiente estructura mínima:

```json
{
  "id": "com.tu-nombre.mi-template",
  "name": "Mi Primer Template",
  "version": "1.0.0",
  "author": "Tu Nombre",
  "type": "template", 
  "description": "Descripción corta de lo que hace.",
  "minEngineVersion": "5.6.0",
  "permissions": [],
  "schema": []
}
```

## Taxonomía (`type`)

El campo `type` es **obligatorio** y define en qué parte de la interfaz de DVGE vivirá tu código:

1. **`"template"`**: Plantillas de animación (Lower thirds, Overlays, Tickers). Se renderizan en el *Studio* y son el output final en formato ProRes.
2. **`"tool"`**: Herramientas de asistencia al desarrollo. Aparecen en la *Library* o paneles dedicados para ayudar a orquestar flujos (ej. un generador de JSON).
3. **`"extension"`**: Módulos internos que amplían las capacidades del propio motor. Tienen acceso profundo y requieren aprobación explícita del usuario al instalarse.

## Permisos (`permissions`)

Para mantener el ecosistema completamente seguro, DVGE bloquea los scripts por defecto. Debes declarar en un array qué recursos del sistema operativo necesitas acceder.

```json
  "permissions": [
    "network",  // Permite hacer peticiones HTTP/Fetch al exterior
    "storage"   // Permite leer/escribir archivos en el disco local
  ]
```
*Nota de seguridad: Si un template intenta hacer un `fetch()` sin declarar el permiso `network`, el Sandbox de DVGE bloqueará la petición.*

## Esquema de Propiedades (`schema`)

Define los controles que el usuario final verá en el **Inspector** (Panel derecho) cuando seleccione tu Template. Tú defines la UI, DVGE la construye por ti.

```json
  "schema": [
    {
      "type": "string",
      "id": "title",
      "label": "Título Principal",
      "defaultValue": "Noticias de Última Hora"
    },
    {
      "type": "color",
      "id": "accentColor",
      "label": "Color de Acento",
      "defaultValue": "#FF0000"
    }
  ]
```

### Tipos de Inputs Soportados
- `string`: Campo de texto estándar.
- `number`: Valor numérico (útil para modificar posiciones X/Y o escalas).
- `boolean`: Toggle/Checkbox de encendido y apagado.
- `color`: Selector de color (devuelve Hexadecimal o RGBA).
- `image`: Input para cargar imágenes locales (DVGE maneja la ruta absoluta).
- `select`: Menú desplegable (requiere un array de `options` anidado).
- `code`: Editor de código multilínea. Devuelve una cadena HTML cruda. Útil para el plugin Studio Master.
- `prompt`: Zona de arrastre (drag) que genera y expone el PDF de reglas del motor para inyección directa en IAs. Introducido en v5.5.0.
- `artifact`: Zona de pegado universal. Acepta bloques `[[[HTML]]]`, `[[[CSS]]]`, `[[[JS]]]` generados por una IA y los distribuye automáticamente a los archivos correspondientes del plugin.
- `info`: Texto de solo lectura en el inspector. Muestra información copiable al usuario (prompts, IDs, instrucciones).

---

> Con estos campos definidos, el motor sabrá exactamente cómo validar tu componente, dónde mostrarlo en la interfaz Multi-ventana y qué datos inyectar en tu archivo `script.js`.
