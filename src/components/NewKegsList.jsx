import React from 'react'
import Card from 'react-bootstrap/Card';
import Keg from './Keg';
import PropTypes from 'prop-types'
import '../styles/Kegs.css'

function NewKegsList (props){
  console.log(props.masterKegList);
  return (
    <div className="kegsAvailableDiv">
    <h1 style={{fontSize: "40px", fontWeight:"700", paddingLeft: "7.5%"}}>Available Kegs </h1>
{props.nKegList.map((keg) =>
  <Card className="text-white cardClass">
  <div className='cardHeader'>
    <h5 className='cardTitle'>{keg.name} <h6 className='cardTitleB'>{keg.brand} from Ashland </h6></h5>
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
</div>
);
}
NewKegsList.propTypes ={
  masterKegList: PropTypes.array
};
export default NewKegsList
