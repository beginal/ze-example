import { createWrapper } from 'next-redux-wrapper';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer  from '../reducer';
import { composeWithDevTools } from 'redux-devtools-extension'

const configureStore = () => {
  const middlewares = []
  const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares)) // 배포용
    : composeWithDevTools(applyMiddleware(...middlewares)) // 개발용
  const store = createStore(reducer, enhancer)
  return store;
}

const Wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV == 'development'
})

export default Wrapper;
