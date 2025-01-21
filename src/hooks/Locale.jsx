import en from '../locales/en.json';
import it from '../locales/it.json';

const locales = {
    en,
    it
};

const Locale = (lang) => {
    return locales[lang] || locales.en;
};
export default Locale;