import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';


function NewKegForm(props){
  let _productName = null;
  let _brand = null;
  let _style = null;
  let _price = null;
  let _abv = null;
  let _productImage = null;

  function handleTroubleshootingConfirmation(event){
    event.preventDefault();
    props.onNewKegCreation({productName: _productName.value, brand: _brand.value, style: _style.value, price: _price.value, abv: _abv.value, productImage: _productImage.value, id: v4()});
    _productName.value = '';
    _brand.value = '';
    _style.value = '';
    _price.value = '';
    _abv.value = '';
    _productImage.value = '';
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
          id='style'
          placeholder='style (ex Pilsner)'
          ref={(input) => {_style = input;}} />
        <input
          type='text'
          id='price'
          placeholder='price'
          ref={(input) => {_price = input;}} />
        <input
          type='text'
          id='abv'
          placeholder='abv'
          ref={(input) => {_abv = input;}} />
        <input
          id='productImage'
          placeholder='Insert Image URL'
          ref={(input) => {_productImage = input;}} />
          <button type='submit'>Post Keg!</button>
      </form>
    </div>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;
