import React, { Component } from 'react';
import {Link} from 'react-router';
import {Grid, Col, Row} from 'react-bootstrap';


export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentWillMount(){
    console.log("Header.componentWillMount")
    this.setState({}) 
  }
  componentDidMount() {
    console.log("Header.componentDidMount")
  }
  render() {
    return(
      <div className="Header">
      <Link to="/" activeClassName="active">
      <Grid>
        <Row>
        <Col xs={2} md={2} lg={2}>
        <div className="profile-pic"> </div>
        </Col>
        <Col className="display-name" xs={2} md={2}>
          
        </Col>
        <Col className="header-title" xs={2} md={2}>
        Singularity
        </Col>
        <Col xs={6} md={2} className="wallet-address">
          
        </Col>
      </Row>
      </Grid>
      </Link>
      </div>
    )
  }
}
export default Header; 