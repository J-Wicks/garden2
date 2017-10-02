import React, { Component } from 'react';
import landingImg from '../Assets/garden-main.jpg'

const Landing = () => (
  <div className="landing whiteBg">
    <img src={landingImg} alt="Main garden image" />
    <p className="button">
      Cooper's Garden
    </p>
  </div>
);


export default Landing;
