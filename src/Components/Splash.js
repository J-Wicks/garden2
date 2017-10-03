import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div id="splashPage">
    <h1> Cooper's Garden</h1>
    <Link to="/home">
      <button> enter </button>
    </Link>
  </div>
)