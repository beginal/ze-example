export const initialState = {
  isLoggedIn: false,
  me: null,
  signUpData: {},
  loginData: {},
}

const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';

export const LogInAction = data => {
  return {
    type: LOG_IN,
    data
  }
} // 넘겨줄 Action
// 컴포넌트에서 dispatch(LoginAction(data로 넘겨줄값) 으로 사용)

export const LogOutAction = () => {
  return {
    type: LOG_OUT
  }
}

const UserReducer = (state = initialState, action) =>{
  switch(action.type) {
    case LOG_IN : 
    return { // LOG_IN ACTION이 감지되면  아래의 행동을 취한다.
      ...state, // 객체의 불변성을 유지하며 안의 값만 바꾸기 위함
      isLoggedIn: true,
      me: action.data
    }
    case LOG_OUT : 
    return {
      ...state,
      isLoggedIn: false,
      me: null
    }
    default: 
    return state;
  }
}

export default UserReducer;