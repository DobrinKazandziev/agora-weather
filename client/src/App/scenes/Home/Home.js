import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import Form from '../../../components/Form/Form.js';
import Forecast5 from '../Forecast5/Forecast5.js';


class Home extends Component {
  render() {
    return (
    <div className="App">
      <h1>Project Home</h1>
      {/* Link to List.js */}
      <Link to={'./list'}>
        <Form
          //onInputChange={this.onInputChange}
          //onButtonSubmit={this.onButtonSubmit}
        />
      </Link>
      <Forecast5/>
    </div>
    );
  }
}
export default Home;