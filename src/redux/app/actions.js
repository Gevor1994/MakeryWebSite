const actions = {
  APP_START                : 'APP_START',
  APP_STARTED              : 'APP_STARTED',
  APP_LOADER_SET           : 'APP_LOADER_SET',
  USER_CHANGE_LANGUAGE     : 'USER_CHANGE_LANGUAGE',
  CHANGE_LANGUAGE          : 'CHANGE_LANGUAGE',

  appStart: (isRefreshToken = false) => ({
    type: actions.APP_START,
    payload: {
      isRefreshToken,
    }
  }),

  appStarted: () => ({
    type: actions.APP_STARTED,
  }),

  loaderSet: loading => ({
    type: actions.APP_LOADER_SET,
    payload: {
      loading,
    }
  }),

  userInfoMerge: userInfo => ({
    type: actions.USER_INFO_MERGE,
    payload: {
      userInfo,
    }
  }),

  userChangeLanguage: langID => ({
    type: actions.USER_CHANGE_LANGUAGE,
    payload: langID
  }),

  changeLanguage: langID => ({
    type: actions.CHANGE_LANGUAGE,
    payload: langID
  }),
};

export default actions;
