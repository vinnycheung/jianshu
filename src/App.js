import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header'
import store from './store'
import { GlobalStyle } from './style';
import { IconfontStyle } from './statics/iconfont/iconfont'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <GlobalStyle />
          <IconfontStyle />
          <Header />
          <BrowserRouter>
            <div>
              <Route path='/' exact render={() => <div>home</div>}></Route>
              <Route path='/detail' exact render={() => <div>detail</div>}></Route>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
