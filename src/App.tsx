import React, { Component } from 'react';
import { AppContextProvider } from './app-context';
import './App.scss';
import PeriodicTable from './components/periodic-table/PeriodicTable';
import QuizItem from './components/quiz-item/QuizItem';
import * as elementsJson from './elements.json';

class App extends Component {
  render() {
    return (
    <div className="App">
      <div className="App-container">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <AppContextProvider>
          <QuizItem/>
          <PeriodicTable atomicElements={elementsJson.elements}></PeriodicTable>
        </AppContextProvider>
      </div>
    </div>
    );
  }

}

export default App;
