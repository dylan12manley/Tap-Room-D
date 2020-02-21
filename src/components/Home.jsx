import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import AllBeers from './AllBeers'
import Bio from './Bio'
import KegListButton from './KegListButton'
import NewKegButton from './NewKegButton'

function Home(){
  // const styledKegListButton = {
  //   borderRadius: 10px;
  // }
  return (

  <div id='home'>
    <Container>
    <KegListButton className='KLBTN'/>
      <Row>
        <Col>
          <AllBeers/>
        </Col>
        <Col md={5}>
          <Bio/>
        </Col>
      </Row>
      <NewKegButton className='KLBTN'/>
    </Container>
  </div>
  );
}


export default Home;
