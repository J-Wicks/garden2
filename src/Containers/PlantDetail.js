import React, {Component} from 'react';
import plants from '../Assets/plants';

export default class PlantDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plant: plants.filter(plant => plant.srcURL === this.props.match.params.plant)[0],
      blurbDisplay: 'tips',
    };
    this.clickHandler = this.clickHandler.bind(this);
  };

  clickHandler(event) {
    this.setState({
      blurbDisplay: event.target.value,
    });
  }

 render() {
   const plant = plants.filter(plant => plant.srcURL===this.props.match.params.plant)[0]
    return (
      <div className="plantDetail">
        <img src={plant.imgSrc} />
        <div className="infoBlock"> 
          <b>Name: </b> {plant.name} <br/>
          <b>Scientific Name: </b> {plant.scientificName} <br />
          <b>Location: </b> {plant.location} <br />
        </div>
          <div id="plantBlurb">
          <ul >
            <li onClick={this.clickHandler}> 
            <button value="tips"> Tips </button>
            </li>
            <li onClick={this.clickHandler}> 
              <button value="cooperNotes"> Cooper's Notes </button>
            </li>
          </ul>
          <p> {plant[this.state.blurbDisplay]}</p>
        </div>
      </div>
  )
  }
}