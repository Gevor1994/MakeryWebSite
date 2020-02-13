import { Map } from 'immutable';
import actions from './actions';

import { defaultTheme } from '../../config';
import themes from '../../config/themes';
import config from '../../languageProvider/config';

const initState = new Map({

  appStarted: false,

  theme           : themes[defaultTheme],
  loading         : false,


  blockedProfileFields: [],

  langID   : config.defaultLanguage,

  apiData: {
    api_project : null,
    api_key     : null,
    api_version : null,
    api_host    : null,
  },
  registerData: {},
  loginMogalVisible: false,
});

export default function appReducer(state = initState, action) {

  switch (action.type) {

    case actions.APP_STARTED: {
      return state.set('appStarted', true);
    }

    case actions.APP_LOADER_SET: {
      const { loading } = action.payload;
      return state.set('loading', loading);
    }

    case actions.CHANGE_LANGUAGE: {
      return state.set('langID', action.payload);
    }

    default:
      return state;
  }
}
