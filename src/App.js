import React, { Component } from 'react';
import ReleasesList from './ReleasesList'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
          <ReleasesList/>
      </div>
    );
  }
}

export default App;
