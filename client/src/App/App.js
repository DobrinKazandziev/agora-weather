import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Home from './scenes/Home/Home';

class App extends Component {
  render () {

    const App = () => (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home}/>
        </Switch>
      </div>
    );

    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;