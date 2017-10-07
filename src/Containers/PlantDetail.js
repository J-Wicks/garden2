import React, {Component} from 'react';
import plants from '../Assets/plants';

export default class PlantDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plant: plants.filter(plant => plant.srcURL === this.props.match.params.plant)[0],
      blurbDisplay: 'description',
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
          <h3>{plant.name}</h3> <br/>
          <i>{plant.scientificName}  </i> <br />
          {plant.location} <br />
        </div>
          <div id="plantBlurb">
          <ul >
          <li onClick={this.clickHandler}> 
            <button value="description"> Description </button>
            </li>
            <li onClick={this.clickHandler}> 
            <button value="taxonomy"> Taxonomy </button>
            </li>
            <li onClick={this.clickHandler}> 
            <button value="distribution"> Distribution & Habitat </button>
            </li>
            <li onClick={this.clickHandler}> 
              <button value="cooperNotes"> Cooper's Tips </button>
            </li>
          </ul>
          <p> {plant[this.state.blurbDisplay]}</p>
        </div>
      </div>
  )
  }
}