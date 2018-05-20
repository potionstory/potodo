import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Layout from '../styles/Layout';
import TodoBox from '../components/TodoBox';
import styled from 'styled-components';
import * as todoActions from '../store/modules/Todo';


const Container = styled.div`
  padding: 90px 40px;
`;

class HomeView extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  };

  componentDidMount() {
    const { TodoActions } = this.props;
    TodoActions.find();
  }

  render() {
    console.dir(this.props.list);
    return (
      <Layout>
        <Container>
          <TodoBox />
        </Container>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.Todo.get('list').toJS()
  }
}

const mapDispatchToProps = dispatch => {
  return {
    TodoActions: bindActionCreators(todoActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);