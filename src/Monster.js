import React from 'react';
import './Monster.css';
import getMonster from './repo/dnd5eapi.js';

// class Monster extends React.Component {
function Monster(props) {
  let description = "";
  getMonster(props.link)
    .then((monster) => {
      console.log(`Monster: ${monster}`);
      if (undefined !== monster) {
        description += ` AC: ${monster.armor_class}`;
      }
    });

  return (
    <div className="Monster">
      <div className="Count">
        <p>
          1
          </p>
      </div>
      <div className="Name">
        <p>
          <a href={`https://www.dndbeyond.com/monsters/${props.link}`} target="_new">{props.name}</a> {description}
        </p>
      </div>
    </div>
  );
}

export default Monster;
