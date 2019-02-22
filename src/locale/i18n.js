import i18n from 'i18next';
import * as en from './en';

const detector = {
  type: 'languageDetector',
  async: true,
  detect: (cb) => { cb('en') },
  init: () => {},
  cacheUserLanguage: () => {}
};

i18n
  .use(detector)
  .init({
    fallbackLng: 'en',
    resources: {
      en,
      ns: ['translation'],
      defaultNS: 'translation'
    }
});

export default i18n;
