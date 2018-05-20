import React, { Component } from 'react';
import Progress from './Progress';
import CheckBox from './CheckBox';
import styled from 'styled-components';
import update from 'react-addons-update';
import * as todoActions from '../store/modules/Todo';

const Card = styled.div`
  display: inline-block;
  width: 400px;
  margin: 10px;
  vertical-align: top;
  .card {
    margin: 0;
    .card-content {
      padding: 10px;
      .card-title {
        margin: 0;
        border-radius: 2px;
        &:hover {
          background-color: #ffb300;
        }
        input {
          margin-bottom: 0;
          border: none;
          border-radius: 2px;
          font-family: "Roboto", sans-serif;
          font-size: 1.6rem;
          font-weight: 400;
          text-indent: 10px;
          &::placeholder {
            color: #fff;
            opacity: 0.6;
          }
          &:focus, &.valid {
            border: none;
            box-shadow: none;
          }
          &:focus {
            background-color: #fff;
            color: #333;
          }
        }
      }
    }
    .card-list {
      margin-top: 10px;
      padding-top: 10px;
      border-top: 1px solid #fff;
      ul {
        margin: 0;
        li {
          padding: 10px;
          border-radius: 2px;
          &:hover {
            background-color: #ffb300;
          }
          &:hover a {
            display: block;
          }
        }
      }
      > a {
        display: block;
        margin-top: 10px;
        text-align: center;
        box-shadow: none;
        i {
          margin-right: 10px;
          vertical-align: top;
          font-size: 1.6rem;
        }
      }
    }
    .card-action {
      margin-top: 10px;
      padding: 10px 0 0 0;
      border-top: 1px solid #fff;
      text-align: right;
      a {
        margin-left: 10px;
        padding: 0 10px;
        text-align: center;
        box-shadow: none;
        i {
          margin-right: 10px;
          vertical-align: top;
          font-size: 1.6rem;
        }
      }
    }
  }
`;

class TodoBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: null,
      list: []
    };

    this.handleTitle = this.handleTitle.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleWrite = this.handleWrite.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.setState({
      title: this.props.title,
      list: this.props.list
    });
  }

  handleTitle(e) {
    let value = e.target.value;
    this.setState({
      title: value
    });
  }

  handleCheck(index, isCheck) {
    this.setState({
      list: update(
        this.state.list,
        {
          [index]: { 
            isComplete: { $set: isCheck }
          }
        }
      )
    });
  }

  handleWrite(index, value) {
    this.setState({
      list: update(
        this.state.list,
        {
          [index]: { 
            item: { $set: value }
          }
        }
      )
    });
  }

  handleAdd() {
    this.setState({
      list: [
        ...this.state.list,
        {
          item: "",
          isComplete: false
        }
      ]
    });
  }

  handleDelete(index) {
    this.setState({
      list: update(
        this.state.list,
        {
          $splice: [[index, 1]]
        }
      )
    });
  }

  render() {
    let count = this.state.list.reduce((x, y) => {
      return x + (y.isComplete ? 1 : 0);
    }, 0);

    return (
      <Card>
        <Progress onCount={count} onLength={this.state.list.length} />
        <div className="card amber darken-3">
          <div className="card-content white-text">
            <div className="card-title input-field">
              <input onChange={this.handleTitle} value={this.state.title} placeholder="TODO TITLE" type="text" className="validate" />
            </div>
            <div className="card-list">
              <ul>
                {this.state.list.map((n, i) => {
                  return (
                    <CheckBox key={i} onIndex={i} todoIndex={this.props.onIndex} onCheck={this.handleCheck} onWrite={this.handleWrite} onDelete={this.handleDelete} item={n.item} isComplete={n.isComplete} />
                  )
                })}
              </ul>
              <a onClick={this.handleAdd} className="waves-effect waves-light light-blue darken-1 btn"><i className="material-icons">check_box_outline_blank</i>ADD CEHCK ITEM</a>
            </div>
            <div className="card-action">
              <a className="waves-effect waves-light light-green darken-1 btn"><i className="material-icons">save</i>SAVE</a>
              <a className="waves-effect waves-light red darken-1 btn"><i className="material-icons">delete_forever</i>DELETE</a>
            </div>
          </div>
        </div>
      </Card>
    );
  }
}

export default TodoBox;