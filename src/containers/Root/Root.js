import React, { Component } from 'react';
import { connect } from 'react-redux';
import Routes from '../../router/routes';
import TopNav from '../TopNav';
import Footer from '../Footer';

import RootWrapper, { ContentWrapper, Main } from './Root.style.js';

class RootContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isFixed: false,
    };
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll, true);
  }

  render() {

    return (
      <RootWrapper id="rootContainer">
        <TopNav />
        <Main id="main">
          <ContentWrapper>
            <Routes />
          </ContentWrapper>
          <Footer />
        </Main>
      </RootWrapper>
    );
  }
}

export default connect(
  ({ App }) => ({
    appStarted: App.get('appStarted'),
    userInfo: App.get('userInfo'),
    loading: App.get('loading'),
  }), null)(RootContainer);
