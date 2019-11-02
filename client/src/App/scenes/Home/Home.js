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
  }

  onInputChange = (event) => {
    this.setState({
      input: event.target.value
    });
  };

  onButtonSubmit = () => {
    const {searchHistory ,input} = this.state;
    const newSearchHistory = [...searchHistory, input];
    if (input !== '') {
      this.setState(() => {
        return {
          cityName: input,
          searchHistory: newSearchHistory
        }
      });
    }
  }

  render() {
    const {cityName,searchHistory = {}} = this.state;

    return (
    <div>
      <Form
        onInputChange={this.onInputChange}
        onButtonSubmit={this.onButtonSubmit}
      />
      <Forecast5 cityName={cityName}/>
      {searchHistory && <SearchHistory items={searchHistory}/>}
    </div>
    );
  }
}
export default Home;