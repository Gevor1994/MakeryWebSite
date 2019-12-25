import React from 'react';
import { connect } from 'react-redux';
import { makeLocalURLwithLocale } from '../../../../helpers/locationUtils';

import { LinkWrap, CNavLink } from './MenuItem.style';

const MenuItem = ({ name, url, active, size, onClick, langID }) => {
  const linkURL = makeLocalURLwithLocale(url, langID);

  const linkContent = (
    <CNavLink
      to={linkURL}
      activeClassName="activeLink"
      size={size}
      isActive={() => active}
      onClick={onClick}
    >
      <p>•</p>
      {name}
    </CNavLink>
  );

  return (
    <LinkWrap>
      {linkContent}
    </LinkWrap>
  );
};

export default connect(
  ({ App }) => ({
    langID: App.get('langID'),
  })
)(MenuItem);
