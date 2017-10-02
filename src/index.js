import React from 'react';
import ReactDOM from 'react-dom';
import {Route} from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';  
import 'bootstrap';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

global.jQuery = require('jquery');

ReactDOM.render(
<Router>
  <Route path='/' component={App}/>
</ Router>, document.getElementById('root'));
registerServiceWorker();
