import React, { Component } from 'react';
import CheckBox from './CheckBox';
import styled from 'styled-components';
import update from 'react-addons-update';

const Card = styled.div`
  display: inline-block;
  width: 400px;
  margin: 10px;
  .card {
    margin: 0;
    .card-content {
      padding: 10px;
      .card-title {
        margin: 0;
        padding: 0 10px;
        border-radius: 2px;
        &:hover {
          background-color: #ffb300;
        }
        input {
          margin-bottom: 0;
          border: none;
          font-family: "Roboto", sans-serif;
          font-size: 1.6rem;
          font-weight: 400;
          &::placeholder {
            color: #fff;
            opacity: 0.6;
          }
          &:focus, &.valid {
            border: none;
            box-shadow: none;
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
      list: [
        { 
          item: "체크 리스트1",
          isComplete: true
        },
        { 
          item: "체크 리스트2",
          isComplete: false
        },
        { 
          item: "체크 리스트3",
          isComplete: false
        }
      ]
    };

    this.handleCheck = this.handleCheck.bind(this);
    this.handleWrite = this.handleWrite.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
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

  render() {
    return (
      <Card>
        <div className="card amber darken-3">
          <div className="card-content white-text">
            <div className="card-title input-field">
              <input placeholder="TODO TITLE" type="text" className="validate" />
            </div>
            <div className="card-list">
              <ul>
                {this.state.list.map((n, i) => {
                  return (
                    <CheckBox key={i} onIndex={i} onCheck={this.handleCheck} onWrite={this.handleWrite} item={n.item} isComplete={n.isComplete} />
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