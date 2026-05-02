/**
 * i18n/utils.ts
 * Helpers para obtener traducciones en páginas Astro y componentes.
 */
import { ui, defaultLang, type Lang, type UiKey } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    return (ui[lang][key] ?? ui[defaultLang][key]) as string;
  };
}

export function getAlternateLang(lang: Lang): Lang {
  return lang === 'en' ? 'es' : 'en';
}

export function getAlternateUrl(url: URL, alternateLang: Lang): string {
  const pathParts = url.pathname.split('/').filter(Boolean);

  if (alternateLang === 'en') {
    // Remove /es prefix
    const withoutLang = pathParts.filter(p => p !== 'es').join('/');
    return `/${withoutLang}${withoutLang ? '/' : ''}`;
  } else {
    // Add /es prefix
    return `/es/${pathParts.join('/')}${pathParts.length ? '/' : ''}`;
  }
}
