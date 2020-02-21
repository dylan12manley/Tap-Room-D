import React from 'react';
import PropTypes from 'prop-types';

function ConfirmationQuestion(props){
  return (
    <div>
      <p>Do you have a new keg to add to our list?</p>
      <button onClick={props.onTroubleshootingConfirmation}>Yes</button>
    </div>
  );
}

ConfirmationQuestion.propTypes = {
  onTroubleshootingConfirmation: PropTypes.func
};

export default ConfirmationQuestion;
