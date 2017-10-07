import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import {Fade} from 'react-reveal';
import landingImg from '../Assets/garden-main.jpg';
import BioBar from './BioBar';
import PlantDetail from '../Containers/PlantDetail';

import Sidebar from './Sidebar';

const BlogPane = () => (
  <Fade id="displayPane" duration="3000">
    <div id="displayPane">
    <BioBar />
    <Switch>
      <Route path="/home/:plant" component={PlantDetail}/>
    </Switch>
    <Sidebar barId="sidebarFloatRight" />
    </div>
  </Fade>
);


export default BlogPane;
