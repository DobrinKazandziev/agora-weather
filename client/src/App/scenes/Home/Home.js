import React, { Component } from 'react';

import Form from '../../components/Form/Form.js';
import Forecast5 from '../Forecast5/Forecast5.js';

const initialState = {
  cityName: '',
  input: '',
  searchHistory: []
}

class Home extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  onInputChange = (event) => {
    this.setState({
      input: event.target.value
    });
  };

  onButtonSubmit = () => {
    this.setState(() => {
      const {searchHistory ,input} = this.state;
      const newSearchHistory = [...searchHistory, input];

      return {
        cityName: input,
        searchHistory: newSearchHistory
      }
    });
  }

  render() {
    const {cityName,searchHistory} = this.state;
    const items = searchHistory.map((item,index) => {
      return <li key={index}> {item} </li>;
    })
    return (
    <div>
      <Form
        onInputChange={this.onInputChange}
        onButtonSubmit={this.onButtonSubmit}
      />
      <Forecast5 cityName={cityName}/>
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