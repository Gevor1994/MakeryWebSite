import { isArray, isEmpty} from 'lodash';
import { MAIN_SITE_URL, defaultLanguage, defaultLocale } from '../config';
import { LANGUAGES } from '../constants/common';


export const rootURL = window.location.origin;



export function redirectToMain(localURL = null) {
  const extraURL = Boolean(localURL) ? String(localURL).replace(/^\/{1}/, '') : '';
  window.location.href = MAIN_SITE_URL + (extraURL ? '/' + extraURL : '');
}


export function getMainURL(localURL = null) {
  const extraURL = Boolean(localURL) ? String(localURL).replace(/^\/{1}/, '') : '';
  return MAIN_SITE_URL + (extraURL ? '/' + extraURL : '');
};


export function getLangID(pathname = '') {
  if (!pathname) {
    return defaultLanguage;
  };

  const parts = pathname.split('/');
  if (!isArray(parts) || isEmpty(parts)) {
    return defaultLanguage;
  };

  const locale = String(parts[1]).toLowerCase();
  switch (locale) {
    case 'en':
      return LANGUAGES.en;

    default:
      return defaultLanguage;
  }
}

export function makeLocalURLwithLocale(localURL, langID) {

  let locale = defaultLocale;
  switch (langID) {
    case LANGUAGES.en:
      locale = 'en';
      break;

    default:
  };

  const briefURL = String(localURL)
    .replace(/^\/en/, '')
    .replace(/^\/{1}/, '');

  return `/${locale}/${briefURL}`;
}

export function redirectLocal(localURL = null) {
  const extraURL = Boolean(localURL) ? String(localURL).replace(/^\/{1}/, '') : '';
  window.location.href = rootURL + (extraURL ? '/' + extraURL : '');
}

export function checkIsRefreshToken() {
  const queryParams = window.location.search;
  return queryParams.includes('refresh_token');
}
