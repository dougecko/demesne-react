import React from 'react';
import logo from './resource/d20.png';
import './App.css';
// import Encounter from './Encounter.js';
import PersonComponent from './PersonComponent.js';
import MonsterComponent from './MonsterComponent.js';
import Campaign from './model/data.js';
import constants from './Constants';

export default function App() {
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
        {<MonsterComponent />}
        {/* <Encounter /> */}
        <button onClick={save}>Save</button>
      </div>
      <div className="App-footer">
        <p>NodeJS basePath = {constants.basePath}</p>
      </div>
    </div>
  );
}
