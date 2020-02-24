import React from 'react'
import NewKegsList from './NewKegsList';
import AvailableKegs from './AvailableKegs';
import {Col, Row} from 'react-bootstrap';
import PropTypes from 'prop-types';

function KegsListsHome (props){
  return (
    <Row>
      <Col><AvailableKegs/></Col>
      <Col><NewKegsList/></Col>
    </Row>
)}
KegsListsHome.propTypes ={
  masterKegList: PropTypes.array
};
export default KegsListsHome
