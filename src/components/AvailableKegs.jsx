import React from 'react'
import Card from 'react-bootstrap/Card';
import deadGuy from '../assets/images/deadGuy.jpeg';
import blackButte from '../assets/images/black-butte.jpg';
import double_cherry_lime from '../assets/images/double_cherry_lime.jpeg';
import dreamland from '../assets/images/Dreamland.jpeg';
import hazelnutBrownLabel from '../assets/images/Hazelnut-Brown_label.png';
import kiwanda from '../assets/images/Kiwanda2.jpg';
import '../styles/Kegs.css'

const kegsAvailable = [
  {
    name: "Dead Guy Ale",
    brand: "Rouge",
    style: "Ale",
    price: "5.50",
    abv: "6.8",
    image: deadGuy
  },
  {
    name: "Kiwanda Cream Ale",
    brand: "Pelican",
    style: "Cream Ale",
    price: "5.50",
    abv: "5.4",
    image: kiwanda
  },
  {
    name: "Hazelnut Brown Nectar",
    brand: "Rouge",
    style: "Brown Ale",
    price: "6.00",
    abv: "5.6",
    image: hazelnutBrownLabel
  },
  {
    name: "Dreamland",
    brand: "Rouge",
    style: "Pilsner",
    price: "6.00",
    abv: "4.8",
    image: dreamland
  },
  {
    name: "Double Time Cherry Lime",
    brand: "Rouge",
    style: "Sour",
    price: "7.50",
    abv: "9.1",
    image: double_cherry_lime
  },
  {
    name: "Blask Butte Porter",
    brand: "Deschutes",
    style: "Porter",
    price: "5.50",
    abv: "5.2",
    image: blackButte
  }
]
function AvailableKegs (){
  return (
    <div className="kegsAvailable">
    <h1 style={{fontSize: "40px", paddingLeft: "40px"}}>Available Kegs </h1>
    {kegsAvailable.map((keg, index) =>
      <Card className="text-white cardClass">
        <Card.Img className="cardImg" src={keg.image} alt="an image of a keg" />
        <Card.ImgOverlay>
          <Card.Title>{keg.name} by {keg.brand}</Card.Title>
          <Card.Text>
            <p>${keg.price}</p>
            <p>{keg.abv}% ABV</p>
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    )
  }
    </div>
  );
}

export default AvailableKegs
