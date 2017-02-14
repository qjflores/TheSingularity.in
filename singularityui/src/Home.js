import React, { Component } from 'react';

import {Grid, Row, Col} from 'react-bootstrap';
import {Routine} from './Routine';

export class Home extends Component {
  render() {
    return(
      <div className="Home">
      <Row>
      <Col xs={2} md={2} lg={2} xsOffset={1}>
      <div classname="sectionTitle"></div>
      </Col>
      </Row>
      <div className="sectionContent">
      <Row>
      <Col xs={8} md={8} lg={8} xsOffset={1}>
        <p>
        The Singularity is happening on an open piece of land near the Bangalore airport just north of the city. 
        It is a festival of learning, and enacting the future. It is a place where we live in the future and see what is missing. 
        </p>
        <p>
        We cos-play a rural cyber scenario with
        electric unicycles, high speed internet, cheap smart phones, solar power, lithium batteries,
        powerful personal speakers, autonomous drones, chatbots, and the gig economy.
        </p>
        <p>
        Here androids are common place, everything is electric, we are built it yourself confident.
        </p>
        <p>
        Come. Camp with us. Take an online class. Work on your startup idea. Work on an open source project. Make Art. Do Yoga. Meditate. 
        Have Fun. Celebrate.
        </p>
        <p>
        This is a camping festival. We create the structures we want to live in and work in. People learn online, work online, play online, 
        and also work in the physical world
        </p>
        <p>
        A festival pass costs 10,000 Inr. which entitles access to the space for a 3 month season. 
        They can pitch a tent or build a temporary structure. 
        Tent’s need to be taken down if not occupied for awhile. Structures are generally taken down and rebuilt each quarter. 
        </p>
        <p>
        Different communities set up camps. Jaaga sets up camps for coworking and colearning. 
        Startups, Special Interest Groups, and just groups of friends set up camps together. 
        </p>
      </Col>
      </Row>
      <Row>
      <Routine/>
      </Row>
      </div>
      </div>
  );}
}

export default Home;



