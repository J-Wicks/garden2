import React from 'react';
import {Zoom} from 'react-reveal';
import { Link } from 'react-router-dom';

export default (props) => (
  <Zoom>
  <li className="sidebarImg">
    <Link to={`/home/${props.url}`}>
      <img src={props.src} />
    </Link>
  </li>
  </Zoom>
);
