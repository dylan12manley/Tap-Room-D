import React from 'react';
import { Link } from 'react-router-dom';

function NewArrivalButton(){
  const styledKButton = {
    padding: '12px',
    margin: '0, auto'
  }
  return (
    <div >
      <h3 style={styledKButton}><Link to="/kegsadded">Check Out Our New Arrivals</Link></h3>
    </div>
  );
}

export default NewArrivalButton;
