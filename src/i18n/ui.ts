/**
 * i18n/ui.ts
 * Fuente de verdad para todas las traducciones de la landing.
 * Inglés (en) es el idioma default (audiencia global).
 * Español (es) es el idioma secundario.
 */

export const languages = {
  en: 'English',
  es: 'Español',
};

export const defaultLang = 'en';

export const ui = {
  en: {
    // Meta
    'meta.title': 'Ember Motion Studio | Motion Design & Animation Software for OBS, Twitch and Broadcast',
    'meta.description': 'Create broadcast overlays, lower thirds and motion graphics in real time with Ember Motion Studio. Free animation software for OBS, Twitch and DaVinci Resolve.',

    // Nav
    'nav.examples': 'Examples',
    'nav.stories': 'Stories',
    'nav.docs': 'Docs',
    'nav.download': 'Download',

    // Hero
    'hero.badge': 'Open Source · MIT License',
    'hero.headline.1': 'Motion Design',
    'hero.headline.2': 'for Broadcast &',
    'hero.headline.3': 'Streaming',
    'hero.subheadline': 'Ember Motion Studio is the real-time animation software for creating broadcast overlays, lower thirds and vector motion graphics — frame-perfect, CPU-friendly, ready for OBS, Twitch and DaVinci Resolve.',
    'hero.cta.primary': 'Download Free',
    'hero.cta.secondary': 'View Examples',

    // Use Cases section
    'usecases.label': 'Who it\'s for',
    'usecases.title': 'Motion Design Software for Streamers and Broadcast Producers',
    'usecases.desc': 'Ember Motion Studio is the professional motion design and animation software powered by the DVGE engine, built for video editors, broadcast producers and developers who need animated graphics — drag-and-drop ready for DaVinci Resolve, Premiere Pro or After Effects.',

    'usecases.lowerthirds.tag': 'Lower Thirds',
    'usecases.lowerthirds.desc': 'Animated text bands for interviews, news and documentaries. Direct export as .mov with alpha channel. Supports stinger transitions and transparent backgrounds.',

    'usecases.overlays.tag': 'Broadcast Overlays',
    'usecases.overlays.desc': 'Markers, clocks, weather widgets and scoreboards for live streams. Browser source compatible with OBS, vMix and Twitch — CPU-friendly and WebM ready.',

    'usecases.titles.tag': 'Animated Titles',
    'usecases.titles.desc': 'Cinematic openings and section titles with frame-perfect vector animations reproducible on any hardware. Full motion graphics control.',

    'usecases.automation.tag': 'Automation',
    'usecases.automation.desc': 'Generate data-driven graphics in batch from external sources. Ideal for news and sports production with real-time rendering.',

    // Showcase section
    'showcase.label': 'Showcase',
    'showcase.title': 'Animation Software in Action: Overlays, Lower Thirds & Motion Graphics',
    'showcase.subtitle': 'See the DVGE engine power in action through our built-in templates.',

    // Pillars
    'pillars.label': 'Why Ember',

    // Footer
    'footer.credit': 'Developed by Jonatan Barón — Ember Motion Studio v6.0.0, powered by DVGE',
    'footer.rights': 'Open Source · MIT License',

    // Language switcher
    'lang.switch': 'ES',
    'lang.switch.label': 'Cambiar a Español',
  },

  es: {
    // Meta
    'meta.title': 'Ember Motion Studio | Software de Motion Design y Animación para OBS, Twitch y Broadcast',
    'meta.description': 'Crea overlays broadcast, lower thirds y motion graphics en tiempo real con Ember Motion Studio. Software de animación gratuito para OBS, Twitch y DaVinci Resolve.',

    // Nav
    'nav.examples': 'Ejemplos',
    'nav.stories': 'Historias',
    'nav.docs': 'Documentación',
    'nav.download': 'Descargar',

    // Hero
    'hero.badge': 'Código Abierto · Licencia MIT',
    'hero.headline.1': 'Motion Design',
    'hero.headline.2': 'para Broadcast y',
    'hero.headline.3': 'Streaming',
    'hero.subheadline': 'Ember Motion Studio es el software de animación en tiempo real para crear overlays broadcast, lower thirds y motion graphics vectoriales — frame-perfect, eficiente en CPU, listo para OBS, Twitch y DaVinci Resolve.',
    'hero.cta.primary': 'Descargar Gratis',
    'hero.cta.secondary': 'Ver Ejemplos',

    // Use Cases section
    'usecases.label': 'Para quién es',
    'usecases.title': 'Software de Motion Design para Streamers y Productores Broadcast',
    'usecases.desc': 'Ember Motion Studio es el software profesional de motion design y animación impulsado por el motor DVGE, diseñado para editores de video, productores broadcast y desarrolladores que necesitan gráficos animados listos para DaVinci Resolve, Premiere Pro o After Effects.',

    'usecases.lowerthirds.tag': 'Lower Thirds',
    'usecases.lowerthirds.desc': 'Bandas de texto animadas para entrevistas, noticias y documentales. Exportación directa como .mov con canal alpha. Compatible con stinger transitions y fondos transparentes.',

    'usecases.overlays.tag': 'Overlays Broadcast',
    'usecases.overlays.desc': 'Marcadores, relojes, widgets de clima y scoreboard para transmisiones en vivo. Browser source compatible con OBS, vMix y Twitch — eficiente en CPU y listo para WebM.',

    'usecases.titles.tag': 'Títulos Animados',
    'usecases.titles.desc': 'Aperturas cinemáticas y títulos de sección con animaciones vectoriales frame-perfect reproducibles en cualquier hardware. Control total de motion graphics.',

    'usecases.automation.tag': 'Automatización',
    'usecases.automation.desc': 'Genera gráficos data-driven en lote desde datos externos. Ideal para producción de noticias y deportes con renderizado en tiempo real.',

    // Showcase section
    'showcase.label': 'Showcase',
    'showcase.title': 'Animation Software en Acción: Overlays, Lower Thirds y Motion Graphics',
    'showcase.subtitle': 'Visualiza la potencia del motor DVGE en acción a través de nuestras plantillas integradas.',

    // Pillars
    'pillars.label': 'Por qué Ember',

    // Footer
    'footer.credit': 'Desarrollado por Jonatan Barón — Ember Motion Studio v6.0.0, powered by DVGE',
    'footer.rights': 'Código Abierto · Licencia MIT',

    // Language switcher
    'lang.switch': 'EN',
    'lang.switch.label': 'Switch to English',
  },
} as const;

export type UiKey = keyof typeof ui['en'];
export type Lang = keyof typeof ui;
