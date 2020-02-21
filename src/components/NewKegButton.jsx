import React from 'react';
import { Link } from 'react-router-dom';

function NewKegButton(){
  const styledKButton = {
    padding: '12px',
    margin: '0, auto'
  }
  return (
    <div >
      <h3 style={styledKButton}><Link to="/newkeg">Add a new keg to our list</Link></h3>
    </div>
  );
}

export default NewKegButton;
