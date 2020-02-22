import React from 'react';
import { Link } from 'react-router-dom';

function NewKegButton(){
  const styledKButton = {
    padding: '12px',
    margin: '0, auto'
  }
  return (
    <div >
      <Link to="/newkeg">
        <button type="button"
        className='noBtn2'>
             Add A New Keg
        </button>
      </Link>
    </div>
  );
}

export default NewKegButton;
