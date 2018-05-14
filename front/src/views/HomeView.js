import React, { Component } from 'react';
import Layout from '../styles/Layout';
import TodoBox from '../components/TodoBox';
import styled from 'styled-components';

const Container = styled.div`
  padding: 90px 40px;
`;

class HomeView extends Component {
  render() {
    return (
      <Layout>
        <Container>
          <TodoBox />
        </Container>
      </Layout>
    );
  }
}

export default HomeView;