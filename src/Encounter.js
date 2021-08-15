import React from 'react';
import './Encounter.css';
import Monster from './Monster.js';

export default class Encounter extends React.Component {
  render() { 
    return (
      <div className="Encounter">
        <div className="Map">
          <p>
            I'm a map, I'm a map, I'm a map!
          </p>
        </div>
        <div className="Monsters">
          <p>
            This is the encounter component.<br/>
            Details of monsters and NPCs display here.
          </p>
          {/* <Monster name="Aboleth" link="aboleth"/> */}
          <Monster name="Acolyte" link="acolyte"/>
          {/* <Monster name="Beholder" link="beholder"/> */}
        </div>
      </div>
    );
  }
}
