---
title: Licencia
description: Licencia MIT del proyecto DVGE.
sidebar:
  order: 6
---

DVGE se publica bajo la **Licencia MIT**. Eres libre de usar, modificar y distribuir el motor para fines comerciales y personales, sujeto a las condiciones de la licencia.

## Modelo de Negocio (Open Core)

Para garantizar que DVGE sea sostenible a largo plazo y que la tecnología siga avanzando, operamos bajo un modelo transparente:

- **Core Engine (FREE)**: El motor base es completamente gratuito y de código abierto bajo la licencia MIT. Es ideal para la comunidad, estudiantes y uso individual. Tienes control total sobre el motor.
- **PRO (Próximamente)**: Diseñado para Power Users. Añadirá herramientas nativas exclusivas como el **Panel de Batch Render** para procesamiento masivo automatizado sin tocar código.
- **ENTERPRISE (Próximamente)**: Pensado para productoras masivas y workflows críticos. Incluirá plugins hiper-potentes compilados en C++/Rust para orquestación de render farms.

> **Nota sobre el modelo a largo plazo**: Las funciones PRO y ENTERPRISE se distribuirán como módulos separados con licencia comercial. El núcleo del motor permanecerá bajo MIT. La transición mencionada en el roadmap (v6.0.0) se refiere al cierre del código de los módulos premium, no del core.

> **Nota de Infraestructura**: Todo el procesamiento comercial está manejado de manera segura vía *Lemon Squeezy* y *Cloudflare*, sin cuentas de usuario invasivas. La validación se realiza a través de una *License Key*.

## Dependencias con Licencias Propias

DVGE se apoya en tecnologías de terceros que tienen sus propias condiciones de uso. La licencia MIT de DVGE aplica únicamente al código propio del motor.

### Remotion (Motor de Renderizado)

Remotion opera bajo una **licencia dual**, no MIT:

- **Gratuita**: Individuos, organizaciones sin fines de lucro, y pequeñas empresas de hasta 3 empleados.
- **Comercial (de pago)**: Empresas u organizaciones que superen ese umbral.

**Al utilizar DVGE, usted acepta que:**
1. El uso de los componentes de Remotion integrados está sujeto a la [Remotion License](https://www.remotion.dev/license).
2. Si su organización requiere una licencia comercial de Remotion, es **su responsabilidad** adquirirla directamente con ellos.
3. Jonatan Barón no otorga, ni pretende otorgar, ninguna sublicencia sobre el código de Remotion que contravenga sus términos originales.

---

Copyright (c) 2026 Jonatan Barón

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
