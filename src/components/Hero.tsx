import React from 'react';
import { motion } from 'framer-motion';
import { Download, BookOpen } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="badge">v4.1.0 GA Disponible Ahora</span>
          <h1 className="hero-title">
            Gráficos Broadcast. <br />
            <span className="text-gradient">Tech Web. Cero Desvíos.</span>
          </h1>
          <p className="hero-subtitle">
            El motor de alto rendimiento para gráficos vectoriales profesionales. 
            Determinista, seguro y construido para el futuro de la producción de video.
          </p>
          
          <div className="hero-actions">
            <a href="https://github.com/Mushi-Ayaka/Dynamic-Vector-Graphics-Engine--DVGE-/releases/latest/download/DVGE-Setup-Win.exe" className="btn btn-primary">
              <Download size={20} />
              Descargar para Windows
            </a>
            <a href={`${import.meta.env.BASE_URL}development/quick-start/`} className="btn btn-secondary">
              <BookOpen size={20} />
              Explorar Documentación
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
      >
        <div className="mockup-container">
          <div className="mockup-glow" />
          <img src={`${import.meta.env.BASE_URL}icon_highlight.png`} alt="DVGE Mockup" className="mockup-image" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
