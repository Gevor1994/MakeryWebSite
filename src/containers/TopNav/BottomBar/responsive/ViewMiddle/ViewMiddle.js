import React, { Component, Fragment } from 'react';
import { isArray, isEmpty } from 'lodash';
import { Icon as Ikon } from 'antd';
import MenuItem from '../../MenuItem';


class ViewMiddle extends Component {

  render() {
    const { links, onClick } = this.props;
    if (!isArray(links) || isEmpty(links)) {
      return (
        <MenuItem
          key={0}
          name={<Ikon type="loading" />}
          url={'/'}
          isExternal={false}
          active={false}
          size="normal"
        />
      );
    }

    const menuItems = links.map((link, index) => {
      return (
        <MenuItem
          key={link.id}
          name={link.name}
          url={link.url}
          active={link.active}
          size="normal"
          isExternal={false}
          onClick={() => onClick(index)}
        />
      );
    });


    return (
      <Fragment>
        {menuItems}
      </Fragment>
    );
  }
}

export default ViewMiddle;

