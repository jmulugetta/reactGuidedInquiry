
import React, { Component } from 'react';

export default class BasicInfo extends Component {
  render () {
    return (
      <div>
          <h1>{this.props.name}</h1>
          <h1>{this.props.dateOfBirth}</h1>
          <h1>{this.props.number}</h1>
      </div>
    );
  }
}