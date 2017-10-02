import React, {Component} from 'react';
import plants from '../Assets/plants';

export default class PlantDetail extends Component {
  constructor(props) {
    super(props);
    console.log(this.props); 
    this.state = {
      plant: plants.filter(plant => plant.srcURL === this.props.match.params.plant)[0],
      blurbDisplay: 'tips',
    };
    this.clickHandler = this.clickHandler.bind(this);
  };

  clickHandler(event) {
    console.log(event.target.value);
    this.setState({
      blurbDisplay: event.target.value,
    });
  }

 render() {
    return (
      <div className="plantDetail">
        <img src="https://www.thesun.co.uk/wp-content/uploads/2017/04/nintchdbpict000200248088.jpg?strip=all&quality=100&w=620&h=413&crop=1" />
        <p className="whatevertext"> sucks to be you </p>
        <ul>
          <li onClick={this.clickHandler}> 
          <button value="tips"> Tips </button>
          </li>
          <li onClick={this.clickHandler}> 
            <button value="cooperNotes"> Cooper's Notes </button>
          </li>
        </ul>
        <p> {this.state.plant[this.state.blurbDisplay]}</p>
      </div>
  )
  }
}