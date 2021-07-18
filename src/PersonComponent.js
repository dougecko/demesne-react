import React from 'react';
import $ from 'jquery';

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
    var context = this;
  
    $.ajax({
      url: 'https://b9sqtd9yf0.execute-api.ap-southeast-2.amazonaws.com/dev/person',
      method: 'GET',
      success: function(response) {
        context.setState({
          firstName: response.firstName,
          lastName: response.lastName
        });
      }
    });
  }
}