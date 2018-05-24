import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import * as todoActions from '../store/modules/Todo';

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 50px;
  padding: 5px;
  background-color: #ff8f00;
  text-align: center;
  i {
    height: 40px;
    line-height: 40px;
    vertical-align: top;
  }
  h1 {
    display: inline-block;
    margin: 0;
    height: 40px;
    text-align: center;
    a {
      display: block;
      height: 40px;
      color: #fff;
      font-size: 1.6rem;
      line-height: 40px;
      vertical-align: top;
      opacity: 0.6;
      &:hover {
        opacity: 1;
      }
    }
  }
  .left, .right {
    ul {
      margin: 0;
      li {
        float: left;
        a {
          width: 40px;
          height: 40px;
          padding: 0;
          opacity: 0.6;
          &:hover {
            opacity: 1;
          }
          i {
            font-size: 2rem;
          }
        }
      }
    }
  }
  .left {
    li {
      margin-right: 5px;
    }
  }
  .right {
    li {
      margin-left: 5px;
    }
  }
`;

class HeaderComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      favorite: false
    };

    this.handleFavorite = this.handleFavorite.bind(this);
  }

  handleFavorite = async () => {
    let favorite = !this.state.favorite;
    const { TodoActions } = this.props;

    this.setState({
      favorite: favorite
    });

    await TodoActions.find(favorite);
  }

  render () {
    return (
      <Header>
        <h1><Link to="/">TO<i className="material-icons">check_box</i>DO</Link></h1>
        <div className="left">
          <ul>
            <li>
              <a className="waves-effect waves-light btn-flat white"><i className="material-icons amber-text text-darken-3">info</i></a>
            </li>
            <li>
              <a onClick={this.handleFavorite} className="waves-effect waves-light btn-flat white"><i className="material-icons amber-text text-darken-3">{this.state.favorite ? "favorite" : "favorite_border"}</i></a>
            </li>
          </ul>
        </div>
        <div className="right">
          <ul>
            <li>
              <a className="waves-effect waves-light btn-flat white"><i className="material-icons amber-text text-darken-3">add</i></a>
            </li>
            <li>
              <a className="waves-effect waves-light btn-flat white"><i className="material-icons amber-text text-darken-3">account_circle</i></a>
            </li>
          </ul>
        </div>
      </Header>
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

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);