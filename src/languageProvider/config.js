import toInteger from 'lodash/toInteger';
import { defaultLanguage, defaultLocale } from '../config';
import { LANGUAGES } from '../constants/common';

const config = {
	defaultLanguage,
	defaultLocale,
	options: [
		{
			locale: 'en',
			langID: LANGUAGES.en,
			icon: 'us',
			text: 'English',
			code: 'Eng',
		},
	],
};

export function getCurrentLanguage(langID) {
	return config.options.find(language => language.langID === toInteger(langID)) || config.options[1];
}

export default config;
