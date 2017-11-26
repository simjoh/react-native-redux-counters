import React, { Component } from 'react';
import { connect } from 'react-redux';
import Secured from './Secured';
 
export default class Application extends Component {
  render() {
    return <Secured />;
  }
}
