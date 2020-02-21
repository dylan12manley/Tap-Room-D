import React from 'react';
import { Link } from 'react-router-dom';

function KegListButton(){
  const styledKButton = {
    padding: '12px',
    marginLeft: '30%'
  }
  return (
    <div >
      <h3 style={styledKButton}><Link to="/kegs">Check Out Currently Available Keg List</Link></h3>
    </div>
  );
}

export default KegListButton;
