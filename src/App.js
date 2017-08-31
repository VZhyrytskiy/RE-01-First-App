import React, { Component } from 'react';

import NewsItem from './components/NewsItem';
import logo from './images/logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Hello world!</h1>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <NewsItem
          titleText="Hello World!"
        />
      </div>
    );
  }
}

export default App;
