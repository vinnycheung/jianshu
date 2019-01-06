import React, { Component, Fragment } from 'react';
import Header from './common/header'
import { GlobalStyle } from './style';
import { IconfontStyle } from './statics/iconfont/iconfont'

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <IconfontStyle />
        <Header />
      </Fragment>
    );
  }
}

export default App;
