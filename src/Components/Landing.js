import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import landingImg from '../Assets/garden-main.jpg';
import PlantDetail from '../Containers/PlantDetail';

import Sidebar from './Sidebar';

const BlogPane = () => (
  <div id="displayPane">
  <Sidebar barId="sidebarFloatLeft" />
  <Switch>
    <Route path="/home/:plant" component={PlantDetail}/>
  </Switch>
  <Sidebar barId="sidebarFloatRight" />
  </div>
);


export default BlogPane;
