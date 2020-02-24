import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Slogan from './Slogan'
import Testimonial from './Testimonial'
import FeaturedItems from './FeaturedItems'
import EventBoard from './EventBoard'
// import Awards from '/.Awards'
import Bio from './Bio'
import NewKegButton from './NewKegButton'

function Home(){
  // const styledKegListButton = {
  //   borderRadius: 10px;
  // }
  return (

  <div id='home'>
    <Container>
      <Slogan/>
      <Row>
        <Col md={3}>
          <Bio/>
          <Testimonial/>
        </Col>
        <Col md={5}>
          <FeaturedItems/>
        </Col>
        <Col md={4}>
          <EventBoard/>
        </Col>
      </Row>

      <NewKegButton className='KLBTN'/>
    </Container>
  </div>
  );
}


export default Home;
