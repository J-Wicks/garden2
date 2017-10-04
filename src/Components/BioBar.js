import React from 'react';
import ImageCircle from './ImageCircle';
import plants from '../Assets/plants';
import cooperPic from '../Assets/cooperpic.png';

const SideBar = (props) => {
  return (
      <div id="sidebarFloatLeft" className="vh90 green">
          <img className="bioPic" src={cooperPic} />

        <p>
        Hello I am Cooper. Actually I am Jeremy in disguise and I am writing this biography for Cooper.
        This site is a gift for Cooper for her birthday, you see, and I won't be able to get her to fill this out without spoiling the gift.
        Unfortunately, this means I need to write something here in order to test the formatting. Thus, here we are.
        </p>
      </div>
    );
}


export default SideBar;
