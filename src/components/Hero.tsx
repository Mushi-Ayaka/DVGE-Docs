import { motion } from 'framer-motion';
import { Download, Play, ShieldCheck } from 'lucide-react';
import { ui } from '../i18n/ui';

interface HeroProps {
  lang?: 'en' | 'es';
}

const Hero = ({ lang = 'en' }: HeroProps) => {
  const t = ui[lang];

  const promoVideoUrl = lang === 'es'
    ? 'https://www.youtube.com/watch?v=2zsTmMPQ9kg'
    : 'https://www.youtube.com/watch?v=tjsKyZXpngQ';

  const virusTotalUrl = 'https://www.virustotal.com/gui/file/83b295c023586758c1364a87e41382ee86250eb8e70ac91bb8cd4abf6b966f47?nocache=1';

  return (
    <section className="hero-section">

      {/* Línea de acento vertical izquierda */}
      <div className="hero-accent-line" aria-hidden="true" />

      <div className="hero-container">
        <div className="hero-layout-split">
          
          {/* Lado Izquierdo: Copy / Acciones */}
          <div className="hero-content-side">
            {/* Bloque superior: etiqueta técnica */}
            <motion.div
              className="hero-label"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="label-dot" />
              <span>{t['hero.badge']}</span>
            </motion.div>

            {/* Título principal: tipografía como elemento visual */}
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <span className="title-line title-line--accent">{t['hero.headline.1']}</span>
              <span className="title-line">{t['hero.headline.2']}</span>
              <span className="title-line">{t['hero.headline.3']}</span>
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
              {t['hero.subheadline']}
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
            >
              <a
                href="https://github.com/Mushi-Ayaka/Dynamic-Vector-Graphics-Engine--DVGE-/releases/download/v5.9.0/EmberMotionStudio-Setup-5.9.0.exe"
                className="btn btn-primary"
              >
                <Download size={18} />
                {t['hero.cta.primary']}
              </a>
              <a
                href={promoVideoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                <Play size={16} />
                {t['hero.cta.secondary']}
              </a>
            </motion.div>

            {/* VirusTotal Trust Seal */}
            <motion.div
              className="virustotal-seal"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.75 }}
            >
              <a
                href={virusTotalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="vt-link"
              >
                <ShieldCheck size={16} className="vt-icon" />
                <span className="vt-text">
                  {lang === 'es'
                    ? '0/58 Detecciones en VirusTotal (Instalador 100% Seguro)'
                    : '0/58 Detections on VirusTotal (100% Safe Clean Scan)'}
                </span>
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

          {/* Lado Derecho: Frame del Video de Vibe Motion */}
          <motion.div
            className="hero-video-side"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="hero-video-frame">
              <div className="frame-header">
                <div className="frame-dots">
                  <span className="dot dot-close"></span>
                  <span className="dot dot-minimize"></span>
                  <span className="dot dot-expand"></span>
                </div>
                <span className="frame-title">Vibe Motion AI Workspace</span>
              </div>
              <div className="frame-body">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="hero-video-element"
                  poster={`${import.meta.env.BASE_URL}logo-square.png`}
                >
                  <source src={`${import.meta.env.BASE_URL}multimedia/demo6.mp4`} type="video/mp4" />
                </video>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
