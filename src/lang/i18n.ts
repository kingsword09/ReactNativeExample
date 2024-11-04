import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {getLocales} from 'react-native-localize';

import en from './en/en.json';
import zh from './zh/zh.json';

const resources = {
  en: en,
  zh: zh,
};
const lng = getLocales()?.[0]?.languageCode ?? 'en';

i18n.use(initReactI18next).init({
  //
  resources,
  lng,
  fallbackLng: 'en',
});

export default {i18n};
