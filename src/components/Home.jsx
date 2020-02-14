import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import AvailableKegs from './AvailableKegs'
import Bio from './Bio'

function Home(){
  return (

  <div id='home'>
    <Container>
      <Row>
        <Col>
          <AvailableKegs/>
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
