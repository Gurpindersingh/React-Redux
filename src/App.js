import React, { Component } from 'react';
import logo from './logo.svg';
import Login from './components/Login/Login';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Login />
      </div>
    );
  }
}

export default App;
