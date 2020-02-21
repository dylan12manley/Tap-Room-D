import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Question.css'

function ConfirmationQuestion(props){
  return (
    <div className='question'>
      <h3>Are you trying to add a hoppy beer?</h3>
      <button className='noBtn' onClick={props.onTroubleshootingConfirmation}>No</button>
    </div>
  );
}

ConfirmationQuestion.propTypes = {
  onTroubleshootingConfirmation: PropTypes.func
};

export default ConfirmationQuestion;
