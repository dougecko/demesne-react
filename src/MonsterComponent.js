import React from 'react';
import $ from 'jquery';
import constants from './Constants';

export default class MonsterComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: "",
      alignment: ""
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.name} {this.state.alignment}</h1>
      </div>
    );
  }

  componentDidMount() {
    this.fetch();
  }

  fetch() {
    var component = this;

    $.ajax({
      url: constants.basePath + 'monster?index=aboleth',
      method: 'GET',
      success: function (response) {
        component.setState({
          name: response.name,
          alignment: response.alignment
        });
      }
    });
  }
}