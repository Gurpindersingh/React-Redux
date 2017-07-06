class loginApi {  
  static getAllData(credentials) {
console.log("credentials", credentials);
const request = new Request('http://localhost:3004/users/getData', {
     method: 'POST',
     
  headers: {
   'Content-Type': 'application/json',
   'accept':'application/json',
  },
   body:JSON.stringify(credentials)
    });
    return fetch(request).then((response) => response.json())
      .then((responseData) => {
         
            console.log(responseData);
            return responseData;
          
      }).catch(error => {
      return error;
    });
  }
}

export default loginApi;  