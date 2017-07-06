  
import initialState from './initialState';
import * as types from '../actions/actionTypes';
import { Route, Router,browserHistory,IndexRoute } from 'react-router';  

export default function loginReducer(state = initialState.loginError, action) {  
  debugger;
  switch(action.type) {
    case types.LOAD_USER_SUCCESS:
       browserHistory.push('/home')  
    case types.LOGIN_FAILURE:
    return Object.assign({}, state,{
     loginError: action.loginError 
    })
    default: 
      return state;
  }
}