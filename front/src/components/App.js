import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from '../store/modules/Auth';
import * as todoActions from '../store/modules/Todo';

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
    isLoading: state.Todo.isLoading,
    data: state.Todo.data,
    isLogind: state.Auth.isLogin
  }
}

const mapDispatchToProps = dispatch => {
  return {
    AuthActions: bindActionCreators(authActions, dispatch),
    todoActions: bindActionCreators(todoActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);