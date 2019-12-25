import React, { PureComponent,  lazy } from 'react';

const ViewMiddle = lazy(() => import('./responsive/ViewMiddle'));

class Footer extends PureComponent {

  render() {
    return (
      <div>
        <ViewMiddle />
      </div>

    )
  };
}

export default Footer;
