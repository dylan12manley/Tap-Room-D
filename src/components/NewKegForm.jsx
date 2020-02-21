import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';


function NewKegForm(props){
  let _productName = null;
  let _brand = null;
  let _image = null;

  function handleTroubleshootingConfirmation(event){
    event.preventDefault();
    props.onNewKegCreation({productName: _productName.value, brand: _brand.value, style: _style.value, price: _price.value, abv: _abv.value, image: _image.value, id: v4()});
    _productName.value = '';
    _brand.value = '';
    _image.value = '';
  }
  return (
    <div>
      <form onSubmit={handleTroubleshootingConfirmation}>
        <input
          type='text'
          id='productName'
          placeholder='Keg Author'
          ref={(input) => {_productName = input;}} />
        <input
          type='text'
          id='brand'
          placeholder='brand'
          ref={(input) => {_brand = input;}} />
        <input
          type='text'
          id='brand'
          placeholder='brand'
          ref={(input) => {_brand = input;}} />
        <input
          type='text'
          id='brand'
          placeholder='brand'
          ref={(input) => {_brand = input;}} />
        <input
          type='text'
          id='brand'
          placeholder='brand'
          ref={(input) => {_brand = input;}} />
        <input
          type='text'
          id='brand'
          placeholder='brand'
          ref={(input) => {_brand = input;}} />   
        <textarea
          id='image'
          placeholder='Create your post'
          ref={(textarea) => {_image = textarea;}} />
          <button type='submit'>Post Keg!</button>
      </form>
    </div>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;
