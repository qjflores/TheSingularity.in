import React, { Component } from 'react';

import {Grid, Col, Row} from 'react-bootstrap';

export class Rspct extends Component {
  render() {
    return(
      <Grid>
      <div className="Rspct">
      <Row>
        <Col xs={2} md={2} lg={2} xsOffset={1}>
        <div className="sectionTitle">Rspct</div>
        </Col>
        </Row>
        <Row>
        <Col xs={8} md={8} lg={8} xsOffset={1}>
        <div className="sectionContent">
           <p>The Singularity operates on a quarterly schedule. Near the end of each quarter we conduct a demo day called RSPCT 
        in which camps are encouraged to recognize the achievements of their members and individuals show off what they've 
        been working on during the quarter. RSPCT is also for people & camps to talk about and gather support for  their plans 
        for the upcoming quarter.</p>
        </div>
        </Col>
      </Row>
      </div>
      </Grid>
  );}
}

export default Rspct;