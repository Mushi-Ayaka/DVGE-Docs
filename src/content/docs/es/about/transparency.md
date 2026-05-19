---
title: Transparencia y Ética
description: Por qué Ember Motion Studio genera confianza a nivel Enterprise.
sidebar:
  order: 5
---

La confianza se demuestra con datos y arquitectura abierta.

## Advertencias de Windows SmartScreen y Seguridad

Al ejecutar el instalador de Ember en Windows, es muy probable que encuentres una advertencia azul de SmartScreen indicando que *"Windows protegió su PC"*.

### ¿Por qué ocurre esto?
Para eliminar esta advertencia automática de Windows, los ejecutables de escritorio deben firmarse digitalmente con un **Certificado de Firma de Código EV (Extended Validation)**. Estos certificados cuestan entre **$300 y $500 USD anuales** y requieren el registro legal de una empresa o entidad corporativa.

Como proyecto independiente, gratuito y de código abierto desarrollado y mantenido por una sola persona, este gasto anual es inviable en esta etapa.

### Nuestro Compromiso de Seguridad
Ember Motion Studio se publica bajo la permisiva **Licencia MIT**.
*   **Totalmente Auditable:** Nuestro código fuente está publicado íntegramente en GitHub. Puedes auditar cada línea de código antes de compilar o instalar el software.
*   **Auditado por VirusTotal:** Cada instalador se somete a una auditoría sistemática de seguridad. El archivo de instalación de la versión actual `v5.9.0` cuenta con una calificación limpia de **0/58 Detecciones en VirusTotal**, lo que garantiza que es 100% seguro y libre de malware o falsos positivos. Puedes consultar el [Reporte Verificable de VirusTotal](https://www.virustotal.com/gui/file/83b295c023586758c1364a87e41382ee86250eb8e70ac91bb8cd4abf6b966f47?nocache=1) de forma directa.
*   **Sin Malware ni Telemetría:** No introducimos rastreadores, scripts espía ni librerías publicitarias de terceros. Todo lo que diseñas y editas permanece de manera estrictamente local en tu ordenador.

### Cómo instalar de manera segura:
1. Haz clic en **"Más información"** en la ventana azul de advertencia de SmartScreen.
2. Selecciona **"Ejecutar de todos modos"** para completar la instalación del suite.

---

## Benchmarking Real

No ocultamos las métricas. Los datos de rendimiento están documentados con metodología verificable en la página de [Benchmarks y Estabilidad](/engine/benchmarks/), cubriendo:

- **Determinismo de Renderizado**: Por qué el desvío temporal es estructuralmente imposible en el modelo frame-math.
- **Precisión Alpha**: Cadena de tres capas que garantiza el canal alfa en ProRes 4444.
- **Overhead del Sandbox**: Impacto medido del sistema de seguridad en el loop de 60fps.
- **Persistencia Atómica**: Garantía de integridad de datos ante cierres inesperados.

## Cumplimiento de Código Abierto

**Ember Motion Studio** se apoya en los hombros de gigantes tecnológicos. Reconocemos públicamente y respetamos las licencias de las infraestructuras open source críticas que hacen posible la existencia de este proyecto:

- **Electron** (Capa de sistema y ventanas)
- **Chromium** (Motor V8 y WebGL)
- **FFmpeg** (Procesamiento de medios y codificación ProRes)
- **React** (Interfaz de usuario interactiva)
- **Remotion** (Motor de matemáticas de tiempo de fotogramas)

Toda nuestra plataforma respeta el ecosistema y contribuye a la evolución del "WebTech" en la industria del video broadcast.
