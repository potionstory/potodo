import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store';


class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Route path="/" component={ App } />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default Root;
