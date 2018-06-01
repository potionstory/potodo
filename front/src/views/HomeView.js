import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Layout from '../styles/Layout';
import TodoBox from '../components/TodoBox';
import styled from 'styled-components';
import * as todoActions from '../store/modules/Todo';


const Container = styled.div`
  padding: 90px 40px;
  .box-add {
    display: inline-block;
    width: 400px;
    height: 200px;
    margin: 10px;
    vertical-align: top;
    text-align: center;
    line-height: 200px;
    .btn-floating {
      width: 100px;
      height: 100px;
      line-height: 100px;
      i {
        font-size: 5rem;
        vertical-align: middle;
      }
    }
  }
`;

class HomeView extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isFavorite: false,
      list: []
    };

    this.handleCreate = this.handleCreate.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  };

  componentDidMount() {
    const { TodoActions } = this.props;
    TodoActions.find();
  }

  handleCreate = async () => {
    const { TodoActions } = this.props;
    const data = {
      title: "",
      list: [],
      favorite: false
    };
    await TodoActions.create(data);
    await TodoActions.find();
  }

  handleSave = async (id, data) => {
    const { TodoActions } = this.props;

    await TodoActions.save(id, data);
    await TodoActions.find();
  }

  handleRemove = async (id) => {
    const { TodoActions } = this.props;

    await TodoActions.remove(id);
    await TodoActions.find();
  }

  render() {

    let sortList = [];
    if (this.props.isFavorite){
      sortList = this.props.list.sort((a, b) => {
        return (a.favorite === b.favorite) ? 0 : a.favorite ? -1 : 1;
      });
    } else {
      sortList = this.props.list.sort((a, b) => {
        return (a.createdAt > b.createdAt)
      });
    }

    return (
      <Layout>
        <Container>
          {sortList.map((n, i) => {
            return (
              <TodoBox key={n._id} onId={n._id} onIndex={i} onSave={this.handleSave} onRemove={this.handleRemove} title={n.title} list={n.list} favorite={n.favorite}/>
            )
          })}
          <div className="box-add">
            <a onClick={this.handleCreate} className="btn-floating btn-large waves-effect waves-light amber darken-3"><i className="material-icons">add</i></a>
          </div>
        </Container>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    isFavorite: state.Todo.isFavorite,
    list: state.Todo.list
  }
}

const mapDispatchToProps = dispatch => {
  return {
    TodoActions: bindActionCreators(todoActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);