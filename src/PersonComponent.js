import React from 'react';
import $ from 'jquery';
import constants from './Constants';

export default class PersonComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: ""
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.firstName} {this.state.lastName}</h1>
      </div>
    );
  }

  componentDidMount() {
    this.fetch();
  }

  fetch() {
    var component = this;

    $.ajax({
      url: constants.basePath + 'person',
      method: 'GET',
      success: function (response) {
        component.setState({
          firstName: response.firstName,
          lastName: response.lastName
        });
      }
    });
  }
}