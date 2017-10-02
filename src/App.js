import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import logo from './logo.svg';
import Landing from './Components/Landing';
import Sidebar from './Components/Sidebar';
import PlantDetail from './Containers/PlantDetail';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar barId="sidebarFloatLeft" />
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route path="/:plant" component={PlantDetail}/>
        </Switch>
        <Sidebar barId="sidebarFloatRight" />
      </div>
    );
  }
}

export default App;
