import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from '../src/store/configurestore';  
import { Provider } from 'react-redux';  
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {fetchData} from '../src/actions/loginAction';
import routes from './routes';
import { Router, browserHistory, Route } from 'react-router'; 

const store = configureStore();

//store.dispatch(fetchData());

ReactDOM.render( <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>, document.getElementById('root')); 


// ReactDOM.render(
//     <Provider store={store}>
// <App />
//  </Provider>,
//  document.getElementById('root'));
registerServiceWorker();
