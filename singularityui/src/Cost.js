import React, { Component } from 'react';

import {Grid, Col, Row} from 'react-bootstrap';

export class Cost extends Component {
  render() {
    return(
      <Grid>
      <div className="Cost">
      <Row>
      <Col xs={2} md={2} lg={2} xsOffset={1}>
      <div className="sectionTitle">Cost</div>
      </Col>
      </Row>
      <Row>
      <Col xs={8} md={8} lg={8} xsOffset={1}>
      <div className="sectionContent">
        <p>Season Passes to The Singularity cost 10k Inr. </p>

        <p>Seasons are about 3 months and typically run from J</p>

        <p>This entitles the holder to come to the space any time before the end of the season.</p>
      </div>
      </Col>
      </Row>
      </div>
      </Grid>
  );}
}

export default Cost;