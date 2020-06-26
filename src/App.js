import React from 'react';
import logo from './d20.png';
import './App.css';
import Encounter from './Encounter.js';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="App-logo">
          <img className="logo" src={logo} alt="Logo"/>
        </div>
        <div className="App-title">
          <h1>Demesne</h1>
          <p><em>An RPG encounter builder for D&amp;D 5e</em></p>
        </div>
        <div className="App-nav">
          <p className="nav">Intro</p>
          <p className="nav">Encounter</p>
        </div>
      </div>
      <div className="App-main">
        <Encounter />
      </div>
    </div>
  );
}

export default App;
