import React from 'react';
import { Map } from 'immutable';
import IntlMessage from '../../components/utils/intlMessage';
import actions from './actions';

const langPrefix = 'topbar';

const lang = {
  home: <IntlMessage id={`${langPrefix}.home`} />,
  who: <IntlMessage id={`${langPrefix}.who are we`} />,
  what: <IntlMessage id={`${langPrefix}.what we do`} />,
  team: <IntlMessage id={`${langPrefix}.team`} />,
  careers: <IntlMessage id={`${langPrefix}.careers`} />,
  portfolio: <IntlMessage id={`${langPrefix}.portfolio`} />,
  contacts: <IntlMessage id={`${langPrefix}.contacts`} />,
};

const initState = new Map({
  items: [
    {
      id: 1,
      name: lang.home,
      url: '/',
      active: true,
    },
    {
      id: 2,
      name: lang.who,
      url: '/who-are-we',
      active: false,
    },
    {
      id: 3,
      name: lang.what,
      url: '/what-we-do',
      active: false,
    },
    {
      id: 4,
      name: lang.team,
      url: '/team',
      active: false,
    },
    {
      id: 5,
      name: lang.careers,
      url: '/careers',
      active: false,
    },
    {
      id: 6,
      name: lang.portfolio,
      url: '/portfolio',
      active: false,
    },
    {
      id: 7,
      name: lang.contacts,
      url: '/contacts',
      active: false,
    },
  ],
});

export default function headerReducer(state = initState, action) {

  switch (action.type) {

    case actions.HEADER_DATA_SET: {
      const { items } = action.payload;
      return state.set('items', items);
    }

    default:
      return state;
  }
}
