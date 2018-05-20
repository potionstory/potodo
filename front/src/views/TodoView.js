import React, { Component } from 'react';
import Layout from '../styles/Layout';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todoActions from '../store/modules/Todo';

class TodoView extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  };

  render() {
    return (
      <Layout>
        TodoView
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.Todo.list
  }
}

const mapDispatchToProps = dispatch => {
  return {
    TodoActions: bindActionCreators(todoActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoView);