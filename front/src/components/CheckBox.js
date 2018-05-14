import React, { Component } from 'react';
import styled from 'styled-components';

const Item = styled.div`
  position: relative;
  label {
    width: 100%;
    vertical-align: middle;
    input[type="text"] {
      margin: 0;
      width: calc(100% - 35px);
      height: 25px;
      border: none;
      border-radius: 2px;
      line-height: 25px;
      color: #fff;
      text-indent: 10px;
      &:hover, &:focus, &.valid {
        box-shadow: none !important;
      }
      &:focus {
        background-color: #fff;
        color: #333;
      }
      &::placeholder {
        color: #fff;
        opacity: 0.6;
      }
    }
  }
  a {
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    width: 25px;
    height: 25px;
    padding: 0;
    box-shadow: none;
    line-height: 25px;
    &:hover, &:focus {
      box-shadow: none !important;
    }
  }
`;

class CheckBox extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      index: 0
    };

    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleItem = this.handleItem.bind(this);
  }

  componentDidMount() {
    this.setState({
      index: this.props.onIndex
    });
  }

  handleCheckbox(e) {
    let index = this.state.index;
    let isCheck = e.target.checked;

    this.props.onCheck(index, isCheck);
  }

  handleItem(e) {
    let index = this.state.index;
    let value = e.target.value;

    this.props.onWrite(index, value);
  }

  render() {
    return (
      <li>
        <Item>
          <input onChange={this.handleCheckbox} id={this.props.onIndex} type="checkbox" className="filled-in" defaultChecked={this.props.isComplete} />
          <label for={this.props.onIndex}>
            <input onChange={this.handleItem} placeholder="EMPTY CHECK ITEM" type="text" value={this.props.item} />
          </label>
          <a className="waves-effect waves-light red darken-1 btn"><i className="material-icons">close</i></a>
        </Item>
      </li>
    );
  }
}

export default CheckBox;