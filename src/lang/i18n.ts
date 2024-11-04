import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {findBestLanguageTag} from 'react-native-localize';

import en from './en/en.json';
import zh from './zh/zh.json';

const translationGetters = {
  en: () => import('~/lang/en/en.json'),
  zh: () => import('~/lang/zh/zh.json'),
};

const getCurrentLanguage = () => {
  const fallback = {languageTag: 'en', isRTL: false};
  const languageConfig = findBestLanguageTag(Object.keys(translationGetters));
  return languageConfig ?? fallback;
};

const resources = {
  en: en,
  zh: zh,
};
const {languageTag} = getCurrentLanguage();

i18n.use(initReactI18next).init({
  //
  compatibilityJSON: 'v3',
  resources,
  lng: languageTag,
  fallbackLng: 'en',
});

export default {i18n};
