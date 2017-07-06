import loginApi from '../api/loginApi';
import * as types from './actionTypes'

export function loadUserSuccess(cats) { 
  return {type: types.LOAD_USER_SUCCESS, cats}; 
} 
export function setloginError(loginError){
return {type: types.LOGIN_FAILURE, loginError}; 
}


export function fetchData(credentials) {  
  console.log("cred",credentials);
  return function(dispatch) {
    return loginApi.getAllData(credentials)
    .then(login => {
     console.log(login)
     if(login.status == 201){
       debugger;
      var error = login.message;
        //error.login = login;
       // error.iserror = true;
        dispatch(setloginError(error));
       // throw error;
     }
     else{
         dispatch(loadUserSuccess(login));
     }
   }).catch(error => {
     console.log("EEEEEE")
     throw(error);
    });
  };
}