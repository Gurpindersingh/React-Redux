import {combineReducers} from 'redux';  
import login from './loginReducer';
const rootReducer = combineReducers({  
  // short hand property names
  login
})

export default rootReducer; 