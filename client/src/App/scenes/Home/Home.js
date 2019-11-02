import React, { Component } from 'react';

import Form from '../../components/Form/Form.js';
import Forecast5 from '../Forecast5/Forecast5.js';
import SearchHistory from '../SearchHistory/SearchHistory.js';

const initialState = {
  cityName: '',
  input: '',
  searchHistory: []
}

class Home extends Component {
  constructor() {
    super();
    this.state = initialState;

    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmitInput = this.onSubmitInput.bind(this);
    this.handleButtonPress = this.handleButtonPress.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleInputChange = (event) => {
    this.setState({
      input: event.target.value
    });
  };

  onSubmitInput = () => {
    const {searchHistory, input, cityName} = this.state;
    const newSearchHistory = [...searchHistory, input];
    if ((input !== '') && (input !== cityName)) {
      this.setState(() => {
        return {
          cityName: input,
          searchHistory: newSearchHistory
        }
      });
    }
  }

  handleButtonPress = () => {
    this.onSubmitInput();
  }

  handleKeyPress = event => {
    if (event.key === 'Enter') {
      this.onSubmitInput();
    }
  };

  render() {
    const {cityName,searchHistory = {}} = this.state;

    return (
    <div>
      <Form
        handleInputChange = {this.handleInputChange}
        handleButtonPress = {this.handleButtonPress}
        handleKeyPress = {this.handleKeyPress}
      />
      <Forecast5 cityName={cityName}/>
      {searchHistory && <SearchHistory items={searchHistory}/>}
    </div>
    );
  }
}
export default Home;