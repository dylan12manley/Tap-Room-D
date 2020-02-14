import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import AllBeers from './AllBeers'
import Bio from './Bio'

function Home(){
  return (

  <div id='home'>
    <Container>
      <Row>
        <Col>
          <AllBeers/>
        </Col>
        <Col md={5}>
          <Bio/>
        </Col>
      </Row>
    </Container>
  </div>
  );
}


export default Home;
