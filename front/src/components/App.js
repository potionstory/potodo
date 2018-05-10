import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import HomeView from '../views/HomeView';
import TodoView from '../views/TodoView';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/home" component={ HomeView } />
        <Route path="/todo" component={ TodoView } />
        <Redirect to="/home" />
      </Switch>
    );
  }
}

export default App;