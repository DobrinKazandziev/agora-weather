import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Home from './scenes/Home/Home';

const CLASS_NAMES = {
  APP_WRAPPER: 'app-wrapper'
}

class App extends Component {
  render () {

    const App = () => (
      <div className={CLASS_NAMES.APP_WRAPPER}>
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
