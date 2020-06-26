import React from 'react';
import './Monster.css';

class Monster extends React.Component {
  render() { 
    return (
      <div className="Monster">
        <div className="Icon">
          <p>
            M
          </p>
        </div>
        <div className="Name">
          <p>
            <a href={`https://www.dndbeyond.com/monsters/${this.props.link}`} target="_new">{this.props.name}</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Monster;
