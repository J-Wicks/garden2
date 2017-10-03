import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => (
  <li className="sidebarImg">
    <Link to={`/home/${props.url}`}>
      <img src={props.src} />
    </Link>
  </li>
);
