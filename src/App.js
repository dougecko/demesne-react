import React from 'react';
import logo from './d20.png';
import './App.css';
// import Encounter from './Encounter.js';
import PersonComponent from './PersonComponent.js';
import Campaign from './model/data.js';

function App() {
  var save = Campaign.save;
  var data = Campaign.data();

  return (
    <div className="App">
      <div className="App-header">
        <div className="App-logo">
          <img className="logo" src={logo} alt="Logo" />
        </div>
        <div className="App-title">
          <h1>Demesne</h1>
          <p><em>Mustering many mighty monsters.</em></p>
        </div>
        <div className="App-nav">
          <p className="nav">{data.title}</p>
          <p className="nav">Encounter</p>
        </div>
      </div>
      <div className="App-main">
        {<PersonComponent />}
        {/* <Encounter /> */}
        <button onClick={save}>Save</button>
      </div>
    </div>
  );
}

export default App;
