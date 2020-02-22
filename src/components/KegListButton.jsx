import React from 'react';
import { Link } from 'react-router-dom';

function KegListButton(){
  const styledKButton = {
    padding: '12px',
    margin: '0, auto'
  }
  return (
    <div >
    <Link to="/kegs">
    <button type="button"
    className='noBtn'>
         Always Available Kegs
    </button>
</Link>
      <h3 style={styledKButton}><Link to="/kegs"></Link></h3>
    </div>
  );
}

export default KegListButton;
