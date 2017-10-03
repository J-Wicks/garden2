import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import logo from './logo.svg';
import Landing from './Components/Landing';
import Sidebar from './Components/Sidebar';
import Splash from './Components/Splash';
import PlantDetail from './Containers/PlantDetail';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Splash}/>
          <Route path="/home" component={Landing} />
        </Switch>
      </div>
    );
  }
}

export default App;
