import React, { Component } from 'react';

export default class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('client:auth2');
  }

  render() {
    return <div>Google Auth</div>;
  }
}
