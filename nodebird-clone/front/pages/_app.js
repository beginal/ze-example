import React from 'react';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import Head from 'next/head';
import Wrapper from '../store/configureStore';

const App = ({ Component }) => {
  return (
    <>
    <Head>
      <meta charset="utf-8"/>
      <title>NodeBird Page</title>
    </Head>
      <Component />
    </>
  )
}

App.propTypes = {
  Component : PropTypes.elementType.isRequired,
}

export default Wrapper.withRedux(App);
