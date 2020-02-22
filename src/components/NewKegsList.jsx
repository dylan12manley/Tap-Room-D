import React from 'react'
import Card from 'react-bootstrap/Card';
import Keg from './Keg';
import PropTypes from 'prop-types'
import KegListButton from './KegListButton'
import NewKegButton from './NewKegButton'
import '../styles/Kegs.css'

function NewKegsList (props){
  return (
    <div className="kegsAvailableDiv">
    <NewKegButton/>
    <h1 style={{fontSize: "40px", fontWeight:"700", paddingLeft: "7.5%"}}>New Arrivals </h1>
{props.nKegList.map((keg) =>
  <Card className="text-white cardClass">
  <div className='cardHeader'>
    <h5 className='cardTitle'>{keg.name} <h6 className='cardTitleB'> From {keg.brand}</h6></h5>
  </div>
    <Card.Img className="cardImg" src={keg.productImage} alt="an image of a keg" />
    <Card.ImgOverlay>
      <Card.Text>
        <div className="kegSubtitle" >
        <p>${keg.price}</p>
        <p>{keg.abv}% ABV</p>
        </div>
      </Card.Text>
    </Card.ImgOverlay>
  </Card>
)
}
    <KegListButton/>
</div>
);
}
NewKegsList.propTypes ={
  masterKegList: PropTypes.array
};
export default NewKegsList
