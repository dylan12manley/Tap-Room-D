import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import AvailableKegsHome from './AvailableKegsHome'
import Bio from './Bio'

function Home(){
  return (

  <div id='home'>
    <Container>
      <Row>
        <Col>
          <AvailableKegsHome/>
        </Col>
        <Col md={4}>
          <Bio/>
        </Col>
      </Row>
    </Container>
  </div>
  );
}


export default Home;
