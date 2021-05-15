import logo from './logo.svg';
import './App.scss';
import React, { Component } from 'react';
import PeriodicTable from './components/periodic-table/PeriodicTable';
import * as elementJson from './elements.json';
import { AtomicElement, AtomicElementProps } from './components/table-element/TableElement';

class App extends Component {
  render() {
    const atomicElements: AtomicElementProps[] = this.mapElements(elementJson.elements);
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PeriodicTable atomicElements={atomicElements}></PeriodicTable>
      </header>
    </div>
    );
  }

  mapElements(atomicElements: AtomicElement[]): AtomicElementProps[] {
    return atomicElements.map((atomicElement) => {
      return {
        atomicElement
      }
    })
  }


}

export default App;
