import React, { Component } from 'react';

import {Grid, Col, Row} from 'react-bootstrap';

export class Facilities extends Component {
  render() {
    return(
      <Grid>
      <div className="Facilities">
      <Row>
      <Col xs={2} md={2} lg={2} xsOffset={1}>
      <div className="sectionTitle"> Facilities</div>
      </Col>
      </Row>
      <Row>
      <Col xs={8} md={8} lg={8} xsOffset={1}>
        <div className="sectionContent">
          <p>The Singularity operates on a principle of 'Radical Self Reliance' which is to say that ultimately individuals are 
          repsonsible for their own happiness and setting up whatever infrastructure they need for this. </p>

          <p>That said a number of facilities exist in The Singularity to assist. </p>

          <p>Near the front gate is a visitor center where people can learn about The Singularity, watch short videos, and possibly 
          go for a tour. There is also a cafe </p>

          <p>There will be several shower & toilet facilities around the campus so people can relieve themselves with ease.</p>

          <p>We'll have a kitchen set up that prepares meals for participants on a meal plan.</p>

          <p>There will be a large coworking space with electricity & internet where people can sit study and work quietly. 
          The cafe and small nooks around the campus provide space for socializing and meetings.</p>

          <p>Drinking water and water for bathing and washing clothes will also be available.</p>

          <p>Camping space is available to everyone. People need to provide their own tents and create their own shade and 
          hang out places.</p> 
        </div>
        </Col>
        </Row>
      </div>
      </Grid>
  );}
}

export default Facilities;