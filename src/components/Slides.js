import Carousel from "react-bootstrap/Carousel";
import React from "react";
import Img1 from "../images/hotel-glasgow.jpg";
import Img2 from "../images/glasgow.jpeg";
import Img3 from "../images/hotel-london.jpg";

function Slides() {
  return (
    <Carousel className="carousel" fade>
      <Carousel.Item className="item">
        <img src={Img1} alt="First slide" />
        <Carousel.Caption className="caption" />
        lorem ipsum dolor sit amet, consectetur adip incididunt lorem ipsum
        dolor sit amet, consectetur adip incididunt
      </Carousel.Item>

      <Carousel.Item className="item">
        <img src={Img2} alt="Second slide" />
        <Carousel.Caption className="caption" />
        lorem ipsum dolor sit amet, consectetur adip incididunt lorem ipsum
        dolor sit amet, consectetur adip incididunt
      </Carousel.Item>
      <Carousel.Item className="item">
        <img src={Img3} alt="Third slide" />
        <Carousel.Caption className="caption" />
        lorem ipsum dolor sit amet, consectetur adip incididunt lorem ipsum
        dolor sit amet, consectetur adip incididunt
      </Carousel.Item>
    </Carousel>
  );
}

export default Slides;
