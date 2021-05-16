import React, { Component } from 'react';
import './App.scss';
import PeriodicTable from './components/periodic-table/PeriodicTable';
import * as elementsJson from './elements.json';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
    <div className="App">
      <div className="App-container">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <PeriodicTable atomicElements={elementsJson.elements}></PeriodicTable>
      </div>
    </div>
    );
  }

}

export default App;
