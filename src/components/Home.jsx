import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import AvailableKegs from './AvailableKegs'

function Home(){
  return (

  <div id='home'>
    <Container>
      <Row>
        <Col>
          <AvailableKegs/>
        </Col>
        <Col md={8}>
        </Col>
      </Row>
    </Container>
  </div>
  );
}


export default Home;
