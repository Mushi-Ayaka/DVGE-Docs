import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero-section">

      {/* Línea de acento vertical izquierda */}
      <div className="hero-accent-line" aria-hidden="true" />

      <div className="hero-container">

        {/* Bloque superior: etiqueta técnica */}
        <motion.div
          className="hero-label"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="label-dot" />
          <span>v5.6.0 GA — Windows x64 — MIT License</span>
        </motion.div>

        {/* Título principal: tipografía como elemento visual */}
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <span className="title-line">Dynamic</span>
          <span className="title-line title-line--accent">Vector</span>
          <span className="title-line">Graphics Engine</span>
        </motion.h1>

        {/* Separador horizontal */}
        <motion.div
          className="hero-rule"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          aria-hidden="true"
        />

        {/* Propuesta de valor — una sola línea, directa */}
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          De idea a ProRes 4444 en minutos.
          Overlays y lower thirds broadcast con canal alfa nativo,
          sin configurar entornos ni instalar dependencias.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
        >
          <a
            href="https://github.com/Mushi-Ayaka/Dynamic-Vector-Graphics-Engine--DVGE-/releases/download/v5.6.0/DVGE-Setup-5.6.0.exe"
            className="btn btn-primary"
          >
            <Download size={18} />
            Descargar v5.6.0
          </a>
          <a
            href={`${import.meta.env.BASE_URL}development/quick-start/`}
            className="btn btn-ghost"
          >
            Guía de Inicio
            <ArrowRight size={16} />
          </a>
        </motion.div>

        {/* Metadatos técnicos en línea */}
        <motion.div
          className="hero-meta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <span>Electron + React + Remotion</span>
          <span className="meta-sep" aria-hidden="true">·</span>
          <span>ProRes 4444 + Alpha</span>
          <span className="meta-sep" aria-hidden="true">·</span>
          <span>Shadow DOM Sandbox</span>
          <span className="meta-sep" aria-hidden="true">·</span>
          <span>60fps Preview</span>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
