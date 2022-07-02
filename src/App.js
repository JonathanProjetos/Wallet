import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

// eslint-disable-next-line no-unused-vars
const globalstyle = createGlobalStyle``;

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/carteira" component={ Wallet } />
      </Switch>
    );
  }
}
export default App;
