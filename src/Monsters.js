import React from 'react';
import $ from 'jquery';

export default class MonstersComponent extends React.Component {
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
      url: this.context.basepath + 'person',
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