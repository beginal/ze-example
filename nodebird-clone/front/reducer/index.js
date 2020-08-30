import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import users from './user';
import posts from './post';

// State의 초기값

const RootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE: {
        console.log(HYDRATE, action);
        return {
          ...state,
          ...action.payload,
        };
      }
      default:
        return state;
    }
  },
  users,
  posts,
});

export default RootReducer;
