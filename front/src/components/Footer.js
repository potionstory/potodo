import React, { Fragmnet } from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 10;
  width: 100%; 
  height: 50px;
  padding: 5px;
  text-align: center;
  background-color: #ff8f00;
  color: #fff;
  small {
    display: inline-block;
    line-height:40px;
  }
  a {
    width: 40px;
    height: 40px;
    padding: 0;
    line-height: 40px;
    opacity: 0.6;
    i {
      font-size: 2rem;
    }
    &:hover {
      opacity: 1;
    }
  }
`;

const FooterComponent = (props) => {
  return (
    <Footer>
      <small>Copyright @ 2018 potionstory. All rights reserved.</small>
      <a className="right lighten-1 waves-effect waves-light btn-flat white">
        <i className="material-icons amber-text text-darken-3">chat</i>
      </a>
    </Footer>
  );
}

export default FooterComponent;