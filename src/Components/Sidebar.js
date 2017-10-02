import React from 'react';
import ImageCircle from './ImageCircle';
import plants from '../Assets/plants';

const SideBar = (props) => {
  return (
      <div id={props.barId} className="vh90 green">
        <ul>
          {
            plants.map(plant => {
              return <ImageCircle src={plant.imgSrc} />;
            })
          }
        </ul>
      </div>
    );
}


export default SideBar;
