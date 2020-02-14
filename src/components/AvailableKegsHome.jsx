import React from 'react'
import Carousel  from 'react-bootstrap/Carousel';
import deadGuy from '../assets/images/deadGuy.jpeg';
import blackButte from '../assets/images/black-butte.jpg';
import double_cherry_lime from '../assets/images/double_cherry_lime.jpeg';
import dreamland from '../assets/images/Dreamland.jpeg';
import hazelnutBrownLabel from '../assets/images/Hazelnut-Brown_label.png';
import kiwanda from '../assets/images/Kiwanda2.jpg';
import '../styles/Carousel.css'

const kegsAvailable = [
  {
    name: "Dead Guy Ale",
    brand: "Rouge",
    price: "5.50",
    abv: "6.8",
    image: deadGuy
  },
  {
    name: "Kiwanda Cream Ale",
    brand: "Pelican",
    price: "5.50",
    abv: "5.4",
    image: kiwanda
  },
  {
    name: "Hazelnut Brown Nectar",
    brand: "Rouge",
    price: "6.00",
    abv: "5.6",
    image: hazelnutBrownLabel
  },
  {
    name: "Dreamland",
    brand: "Rouge",
    price: "6.00",
    abv: "4.8",
    image: dreamland
  },
  {
    name: "Double Time Cherry Lime",
    brand: "Rouge",
    price: "7.50",
    abv: "9.1",
    image: double_cherry_lime
  },
  {
    name: "Blask Butte Porter",
    brand: "Deschutes",
    price: "5.50",
    abv: "5.2",
    image: blackButte
  }
]

function  AvailableKegsHome(){
  return (
    <>
    <div id='carouselBody'>
    <Carousel>
    {kegsAvailable.map((keg, index) =>

      <Carousel.Item>
        <img
          className="d-block w-100 carouselImg"
          src={keg.image}
          alt="an image of a keg"
        />
        <Carousel.Caption>
          <h3>{keg.name}</h3>
          <h3>{keg.brand}</h3>
          <p>{keg.price}$</p>
          <p>{keg.abv}% ABV</p>
        </Carousel.Caption>
      </Carousel.Item>
    )};

    </Carousel>
    </div>
    </>
  );
}

export default AvailableKegsHome
