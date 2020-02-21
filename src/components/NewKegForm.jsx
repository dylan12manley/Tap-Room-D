import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import '../styles/Question.css'
import KegListButton from './KegListButton'


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
    <div className='newKegForm'>
    <h3>Create New Keg Here</h3>
      <form onSubmit={handleTroubleshootingConfirmation}>
        <input
          className='formInput'
          type='text'
          id='productName'
          placeholder='Product Name'
          ref={(input) => {_productName = input;}} />
        <input
          className='formInput'
          type='text'
          id='brand'
          placeholder='Brand'
          ref={(input) => {_brand = input;}} />
          <br></br>
        <input
          className='formInput'
          type='text'
          id='style'
          placeholder='Style (ex Pilsner)'
          ref={(input) => {_style = input;}} />
        <input
          className='formInput'
          type='text'
          id='price'
          placeholder='Price (in USD)'
          ref={(input) => {_price = input;}} />
          <br></br>
        <input
          className='formInput'
          type='text'
          id='abv'
          placeholder='abv'
          ref={(input) => {_abv = input;}} />
        <input
          className='formInput'
          id='productImage'
          placeholder='Insert Image URL'
          ref={(input) => {_productImage = input;}} />
          <br></br>
          <button className='noBtn' type='submit'>Post Keg!</button>
      </form>
      <KegListButton/>
    </div>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;
