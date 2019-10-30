import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import Form from '../../components/Form/Form.js';
import Forecast5 from '../Forecast5/Forecast5.js';

const initialState = {
  cityName: '',
  input: '',
  searchHistory: []
}

class Home extends Component {
  constructor(){
    super();
    this.state = initialState;
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  };

  onButtonSubmit = () => {
    this.setState(state => {
      const searchHistory = [...state.searchHistory, state.input];

      return {
        cityName: state.input,
        searchHistory
      }
    });
  }

  render() {
    console.log("Home.searchHistory",this.state.searchHistory);
    const items = this.state.searchHistory.map(item => {
      return <li> {item} </li>;
    })
    return (
    <div className="App">
      {/* <Link to={'./list'}> */}
        <Form
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
      {/* </Link> */}
      <Forecast5 cityName={this.state.cityName}/>
      <div>
          <p>Search History:</p>
         <ol>
           {items}
         </ol>
      </div>
    </div>
    );
  }
}
export default Home;