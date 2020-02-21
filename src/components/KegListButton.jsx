import React from 'react';
import { Link } from 'react-router-dom';

function KegListButton(){
  const styledKButton = {
    padding: '12px'
  }
  return (
    <div style={styledKButton}>
      <h3><Link to="/kegs">Check Out Kegs</Link></h3>
    </div>
  );
}

export default KegListButton;
