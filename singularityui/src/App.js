import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Grid, Row, Col} from 'react-bootstrap';

import {Cost} from './Cost';
import {Facilities} from './Facilities';
import {Routine} from './Routine';
import {Rspct} from './Rspct';
import {Studycamps} from './Studycamps';
import {About} from './About';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Grid>
        <Row>
        <About/>
        </Row>
        <Row>
        <Cost/>
        </Row>
        <Row>
        <Facilities />
        </Row>
        <Row>
        <Routine/>
        </Row>
        <Row>
        <Rspct/>
        </Row>
        <Row>
        <Studycamps/>
        </Row>
      </Grid>
      </div>

    )
  }
}

export default App;
