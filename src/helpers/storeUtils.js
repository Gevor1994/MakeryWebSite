import { LANGUAGES } from '../constants/common';
import messagesEn from '../languageProvider/locales/en_US.json';
import messagesRu from '../languageProvider/locales/ru_RU.json';
import messagesArm from '../languageProvider/locales/arm_ARM';

const localeMessages = {
  1: { ...messagesEn },
  2: { ...messagesRu },
  3: { ...messagesArm }
};

export function langIDValue() {
  const App = select('App');
  return App.get('langID') || LANGUAGES.en;
}


