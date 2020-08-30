import React from 'react';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import Head from 'next/head';
import withReduxSaga from 'next-redux-saga';

import Wrapper from '../store/configureStore';

const App = ({ Component }) => (
  <>
    <Head>
      <title>NodeBird Page</title>
    </Head>
    <Component />
  </>
);

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default Wrapper.withRedux(withReduxSaga(App));
