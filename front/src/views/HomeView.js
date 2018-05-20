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
    return (
      <Layout>
        <Container>
          {this.props.list.map((n, i) => {
            return (
              <TodoBox key={n._id} onIndex={i} title={n.title} list={n.list} />
            )
          })}
        </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);