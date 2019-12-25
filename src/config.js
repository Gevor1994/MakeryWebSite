import { LANGUAGES } from './constants/common';
import logo from './images/logo.png'

export const siteConfig = {
	siteName: 'Maker',
	siteIcon: logo,
	footerText: 'Makery',
};


export const host = window.location.hostname;


export const DEV_MAIN_SITE_PATH = `http://${host}:3001`;

export const PROD_MAIN_SITE_PATH = `https://www.makerylabs.com`;

export const MAIN_SITE_URL = DEV_MAIN_SITE_PATH;


export const language = 'en';
export const defaultTheme = 'blue';
export const defaultLanguage = LANGUAGES.en;
export const defaultLocale = 'en';
export const sliderRotationTime = 5000;

const config = {
	host,
	language,
	defaultTheme,
};

export default config;
