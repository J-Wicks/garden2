import React from 'react';
import Reveal from 'react-reveal';
import { Link } from 'react-router-dom';

export default () => (
  <Reveal id="splashPage" className="animated fadeOut" duration="5000">
    <h1> Cooper's Garden</h1>
    <Link to="/home">
      <button> enter </button>
    </Link>
  </Reveal>
)