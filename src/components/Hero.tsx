import React from 'react';
import { motion } from 'framer-motion';
import { Download, BookOpen, Cpu } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="badge">
              <Cpu size={14} style={{ marginRight: '6px' }} />
              <span>v4.1.5 GA — Smart Engine</span>
            </div>
            <h1 className="hero-title">
              Dynamic Vector Graphics <span className="text-gradient">Engine</span>
            </h1>
            <p className="hero-subtitle">
              El motor de renderizado determinista de alto rendimiento para gráficos broadcast profesionales.
              Seguro, preciso y ahora potenciado con una Capa de Inteligencia para flujos de trabajo optimizados.
            </p>

            <div className="hero-actions">
              <a href="https://github.com/Mushi-Ayaka/Dynamic-Vector-Graphics-Engine--DVGE-/releases/download/v4.1.5/DVGE-Setup-4.1.5.exe" className="btn btn-primary">
                <Download size={20} />
                Descargar v4.1.5
              </a>
              <a href={`${import.meta.env.BASE_URL}development/quick-start/`} className="btn btn-secondary">
                <BookOpen size={20} />
                Documentación
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <div className="mockup-container">
            <div className="mockup-glow" />
            <div className="mockup-frame">
              <img src={`${import.meta.env.BASE_URL}icon_highlight.png`} alt="DVGE Engine" className="mockup-image" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
