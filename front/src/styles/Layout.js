import React, { Fragment } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = (props) => {
  const { children } = props;
  return (
    <Fragment>
      <Header />
      { children }
      <Footer />
    </Fragment>
  );
}

export default Layout;