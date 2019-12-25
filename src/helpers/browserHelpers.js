import { toInteger } from 'lodash';
import { sizeMobile, sizeTablet } from '../config/style-config';

export const getClientInfo = () => {
  let unknown = 'unknown';
  const _window = window;
  let width;
  let height;

  // screen
  let screenSize = '';
  if (_window.screen.width) {
    width = (_window.screen.width) ? _window.screen.width : '';
    height = (_window.screen.height) ? _window.screen.height : '';
    screenSize += '' + width + " x " + height;
  }

  // browser
  let nVer = navigator.appVersion;
  let nAgt = navigator.userAgent;
  let browser = navigator.appName;
  let version = '' + parseFloat(navigator.appVersion);
  let nameOffset, verOffset, ix;

  if ((verOffset = nAgt.indexOf('Opera')) !== -1) {
    browser = 'Opera';
    version = nAgt.substring(verOffset + 6);
    if ((verOffset = nAgt.indexOf('Version')) !== -1) {
      version = nAgt.substring(verOffset + 8);
    }
  }
  if ((verOffset = nAgt.indexOf('OPR')) !== -1) {
    browser = 'Opera';
    version = nAgt.substring(verOffset + 4);
  }
  else if ((verOffset = nAgt.indexOf('Edge')) !== -1) {
    browser = 'Microsoft Edge';
    version = nAgt.substring(verOffset + 5);
  }
  else if ((verOffset = nAgt.indexOf('MSIE')) !== -1) {
    browser = 'Microsoft Internet Explorer';
    version = nAgt.substring(verOffset + 5);
  }
  else if ((verOffset = nAgt.indexOf('Chrome')) !== -1) {
    browser = 'Chrome';
    version = nAgt.substring(verOffset + 7);
  }
  else if ((verOffset = nAgt.indexOf('Safari')) !== -1) {
    browser = 'Safari';
    version = nAgt.substring(verOffset + 7);
    if ((verOffset = nAgt.indexOf('Version')) !== -1) {
      version = nAgt.substring(verOffset + 8);
    }
  }
  else if ((verOffset = nAgt.indexOf('Firefox')) !== -1) {
    browser = 'Firefox';
    version = nAgt.substring(verOffset + 8);
  }
  else if (nAgt.indexOf('Trident/') !== -1) {
    browser = 'Microsoft Internet Explorer';
    version = nAgt.substring(nAgt.indexOf('rv:') + 3);
  }
  else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
    browser = nAgt.substring(nameOffset, verOffset);
    version = nAgt.substring(verOffset + 1);
    if (browser.toLowerCase() === browser.toUpperCase()) {
      browser = navigator.appName;
    }
  }
  // trim the version string
  if ((ix = version.indexOf(';')) !== -1) version = version.substring(0, ix);
  if ((ix = version.indexOf(' ')) !== -1) version = version.substring(0, ix);
  if ((ix = version.indexOf(')')) !== -1) version = version.substring(0, ix);

  let mobile = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(nVer);

  let cookieEnabled = !!(navigator.cookieEnabled);

  if (typeof navigator.cookieEnabled === 'undefined' && !cookieEnabled) {
    document.cookie = 'testcookie';
    cookieEnabled = document.cookie.indexOf('testcookie') !== -1;
  }

  let os = unknown;
  for (let id in clientStrings) {
    let cs = clientStrings[id];
    if (cs.r.test(nAgt)) {
      os = cs.s;
      break;
    }
  }

  let osVersion = unknown;

  if (/Windows/.test(os)) {
    osVersion = /Windows (.*)/.exec(os)[1];
    os = 'Windows';
  }

  switch (os) {
    case 'Mac OS X':
      osVersion = /Mac OS X (10[._\d]+)/.exec(nAgt)[1];
      break;

    case 'Android':
      osVersion = /Android ([._\d]+)/.exec(nAgt)[1];
      break;

    case 'iOS':
      osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
      osVersion = osVersion[1] + '.' + osVersion[2] + '.' + (osVersion[3] | 0);
      break;

    default:
  }

  let flashVersion = 'no check';
  const swfobject = _window.swfobject;
  if (typeof swfobject !== 'undefined') {
    let fv = swfobject.getFlashPlayerVersion();
    if (fv.major > 0) {
      flashVersion = fv.major + '.' + fv.minor + ' r' + fv.release;
    }
    else {
      flashVersion = unknown;
    }
  }

  return {
    screen: screenSize,
    screen_width: width.toString(),
    screen_height: height.toString(),
    browser: browser,
    browser_version: version,
    os: os,
    os_version: osVersion.toString(),
    mobile: mobile.toString(),
    cookies: cookieEnabled.toString(),
    flash_version: flashVersion
  };
};

const clientInfo = getClientInfo();
const screenWidth = toInteger(clientInfo.screen_width);

export const isMobile = (screenWidth <= sizeMobile);
export const isTablet = (screenWidth > sizeMobile && screenWidth <= sizeTablet);
export const isDesktop = (screenWidth > sizeTablet);
