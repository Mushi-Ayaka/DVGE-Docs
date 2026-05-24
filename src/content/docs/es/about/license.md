---
title: Licencia
description: Términos de licencia del DVGE (Dynamic Vector Graphics Engine) Runtime Bridge y Ember Motion Studio.
sidebar:
  order: 6
---

## Modelo de Licenciamiento: Open Core

Este ecosistema opera bajo un **modelo de doble licencia** diseñado para mantener la tecnología central libre y abierta, mientras que el producto comercial pueda ser sostenible.

### DVGE (Dynamic Vector Graphics Engine) Runtime Bridge — Licencia MIT

El **DVGE (Dynamic Vector Graphics Engine) Runtime Bridge** es el motor de código abierto. Se publica bajo la permisiva **Licencia MIT**, que te otorga amplios derechos:

- ✅ Gratuito para uso personal, comercial y educativo.
- ✅ Libertad para copiar, modificar y distribuir el motor.
- ✅ Libertad para construir obras derivadas sobre el motor.
- ⚠️ Atribución requerida — el aviso de copyright MIT original debe preservarse en todas las copias o porciones sustanciales del Software.

```
MIT License
Copyright (c) 2026 Jonatan Barón
```

El texto completo de la licencia MIT está disponible en el archivo `LICENSE` en el [repositorio de DVGE](https://github.com/Mushi-Ayaka/Dynamic-Vector-Graphics-Engine--DVGE-).

---

### Ember Motion Studio — Licencia Propietaria

**Ember Motion Studio** es la suite de escritorio profesional construida sobre el DVGE Runtime Bridge. **No es de código abierto** y se distribuye bajo una **licencia comercial propietaria**.

- ❌ El código fuente de Ember Motion Studio **no está disponible** para uso público, modificación ni redistribución.
- ❌ No está permitido aplicar ingeniería inversa, descompilar o desensamblar el software.
- ✅ Puedes usar el instalador distribuido para trabajo creativo personal y profesional según lo establecido en el EULA.
- ✅ Se otorga a los usuarios finales una licencia no transferible y no exclusiva para usar la aplicación.

Los términos específicos de uso están definidos en el [Acuerdo de Licencia de Usuario Final (EULA)](/es/about/terms/) que aceptas al momento de la instalación.

---

## Niveles Comerciales Planificados (Próximamente)

Como parte del roadmap a largo plazo, se planifican módulos comerciales adicionales:

| Nivel | Descripción |
|---|---|
| **FREE** | DVGE Runtime Bridge (MIT). Ideal para la comunidad, estudiantes e individuos. |
| **PRO** *(Próximamente)* | Herramientas Power User de Ember — Panel de Batch Render, controles avanzados de timeline. |
| **ENTERPRISE** *(Próximamente)* | Plugins compilados en C++/Rust de alto rendimiento para orquestación de render farms y workflows de broadcast críticos. |

> **Nota de Infraestructura**: El licenciamiento comercial será manejado de forma segura vía *Lemon Squeezy* y *Cloudflare*, con validación por License Key — sin cuentas de usuario invasivas.

---

## Licencias de Dependencias de Terceros

**Ember Motion Studio** y el **DVGE Runtime Bridge** se apoyan en tecnologías de terceros con sus propios términos de licencia. Nuestras licencias no reemplazan a las de ellas:

### Remotion (Motor de Renderizado)

Remotion opera bajo una **licencia dual** — **no es MIT**:

- **Nivel gratuito**: Individuos, organizaciones sin fines de lucro y empresas de hasta 3 empleados.
- **Comercial (de pago)**: Empresas u organizaciones que superen ese umbral.

**Al utilizar Ember Motion Studio o el DVGE Runtime Bridge, reconoces que:**

1. Los componentes de Remotion integrados están sujetos a la [Remotion License](https://www.remotion.dev/license).
2. Si tu organización requiere una licencia comercial de Remotion, es **tu responsabilidad** adquirirla directamente con ellos.
3. Jonatan Barón no otorga, ni pretende otorgar, ninguna sublicencia sobre el código de Remotion que contravenga sus términos originales.

### Otras Dependencias

Los siguientes componentes de código abierto también son utilizados. Sus respectivas licencias aplican:

- **Electron** — Licencia MIT
- **React** — Licencia MIT
- **FFmpeg** — LGPL / GPL (ver [licencia de FFmpeg](https://ffmpeg.org/legal.html))
- **Chromium** — BSD / varias licencias de código abierto

---

*Copyright © 2026 Jonatan Barón. Todos los derechos reservados respecto a la suite comercial Ember Motion Studio. El núcleo DVGE Runtime Bridge tiene licencia MIT.*
