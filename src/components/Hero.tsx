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
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(228, 76, 48, 0.1)', border: '1px solid #E44C30', padding: '4px 12px', borderRadius: '100px', marginBottom: '24px' }}>
              <span style={{ width: '8px', height: '8px', background: '#E44C30', borderRadius: '50%', boxShadow: '0 0 10px #E44C30' }}></span>
              <span style={{ fontSize: '12px', fontWeight: 600, color: '#E44C30', textTransform: 'uppercase', letterSpacing: '1px' }}>Open Source / En Desarrollo</span>
            </div>
            <h1 className="hero-title">
              Dynamic Vector Graphics <span className="text-gradient">Engine</span>
            </h1>
            <p className="hero-subtitle">
              Crea overlays y tercios inferiores 10x más rápido. 
              Automatiza tus gráficos de broadcast sin tocar una sola línea de código, garantizando un renderizado perfecto con exportación nativa ProRes 4444.
            </p>

            <div className="hero-actions">
              <a href="https://github.com/Mushi-Ayaka/Dynamic-Vector-Graphics-Engine--DVGE-/releases/download/v5.6.0/DVGE-Setup-5.6.0.exe" className="btn btn-primary">
                <Download size={20} />
                Descargar v5.6.0
              </a>
              <a href={`${import.meta.env.BASE_URL}development/quick-start/`} className="btn btn-secondary">
                <BookOpen size={20} />
                Leer la Documentación
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
