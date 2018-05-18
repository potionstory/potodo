import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from '../store/modules/Auth';
import * as systemActions from '../store/modules/System';

import HomeView from '../views/HomeView';
import TodoView from '../views/TodoView';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

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

const mapStateToProps = state => {
  return {
    isLoading: state.System.isLoading,
    data: state.System.data,
    isLogind: state.Auth.isLogin
  }
}

const mapDispatchToProps = dispatch => {
  return {
    AuthActions: bindActionCreators(authActions, dispatch),
    SystemActions: bindActionCreators(systemActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);