import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import Form from '../../components/Form/Form.js';
import Forecast5 from '../Forecast5/Forecast5.js';

const initialState = {
  cityName: '',
  input: ''
}

class Home extends Component {
  constructor(){
    super();
    this.state = initialState;
  }

  onInputChange = (event) => {
    console.log("Home.onInputChange:",event.target.value);
    this.setState({input: event.target.value});
  };

  onButtonSubmit = () => {
    console.log("onButtonSubmit");
    this.setState({cityName: this.state.input});
  }

  render() {
    return (
    <div className="App">
      {/* <Link to={'./list'}> */}
        <Form
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
      {/* </Link> */}
      <Forecast5 cityName={this.state.cityName}/>
    </div>
    );
  }
}
export default Home;