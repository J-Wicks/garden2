import React, { Component } from 'react';
import logo from './logo.svg';
import Landing from './Components/Landing';
import Sidebar from './Components/Sidebar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar barId="sidebarFloatLeft" />
        <Landing />
        <Sidebar barId="sidebarFloatRight" />
      </div>
    );
  }
}

export default App;
