import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
// import LikeControl from './LikeControl'

function Post(props){
  return(
    <div>
      <Row>
        <Col md="1" sm="1">
          <LikeControl />
        </Col>
        <Col md="11" sm="11">
          <h2>{props.productName} </h2>
          <h3> by: {props.brand} </h3>
          <h4> {props.style}</h4>
          <h4> {props.price}</h4>
          <h4> {props.abv}</h4>
          <image src('{props.productImage}')></image>
          <hr/>
        </Col>
      </Row>
    </div>
  );
}

Post.propTypes ={
  productName: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  style: PropTypes.string,
  price: PropTypes.string,
  abv: PropTypes.string,
  productImage: Props.string
};

export default Post;
