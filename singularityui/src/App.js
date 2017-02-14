import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Grid, Row, Col} from 'react-bootstrap';

import {Header} from './js/Header';
import {Cost} from './Cost';
import {Facilities} from './Facilities';
import {Routine} from './Routine';
import {Rspct} from './Rspct';
import {Studycamps} from './Studycamps';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      {this.props.children}
      </div>
    );
  }
}

export default App;
