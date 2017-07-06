import React from 'react';  
import { Route, Router,hashHistory,IndexRoute } from 'react-router';  
import App from './App';  
import homePage from './components/HomePage/Home';  
import loginpage from './components/Login/Login';  


export default ( 
<Router>

 <Route path="/" component={App} />
    <Route path ="/home" component={homePage} />
</Router>
); 