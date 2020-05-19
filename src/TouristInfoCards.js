import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

const TouristInfoCards = props => {
  return (
    <div className="d-md-flex d-lg-flex mr-lg-5 mr-md-4 mr-2 ml-2">
      <Card className="card col-12 col-sm-12 col-md-4 mt-md-5 ml-md-2 mr-md-2 mt-4 pr-2">
        <CardImg
          className="card-img"
          top
          src="https://assets.londonist.com/uploads/2019/10/i875/bus_london.jpg"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>
            <strong>Visit London</strong>
          </CardTitle>
          <CardText>
            Whether you are visiting London for the first time or coming back
            for a special occasion, you’ll discover a city full of unforgettable
            landmarks and exciting things to do. There are London attractions
            waiting for you around every corner...
          </CardText>
          <a
            className="mt-auto"
            href="https://www.visitlondon.com/"
            target="blank"
          >
            <Button>Go London</Button>
          </a>
        </CardBody>
      </Card>
      <Card className="card col-12 col-sm-12 col-md-4 mt-md-5 ml-md-2 mr-md-2 mt-4 pr-2">
        <CardImg
          className="card-img"
          top
          src="https://i2-prod.manchestereveningnews.co.uk/incoming/article14948472.ece/ALTERNATES/s1200/30429_LRR_MEN_ManchesterSkyline_03jpeg.jpg"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>
            <strong>Visit Manchester</strong>
          </CardTitle>
          <CardText>
            Manchester city centre is jam-packed with unique and eclectic
            restaurants,bars,museums,hotels and places to stay whilst the
            surrounding Greater Manchester boroughs offer a patch-work of
            visitor experiences including quaint market towns,beautiful green
            spaces and ...
          </CardText>
          <a
            className="mt-auto"
            href="https://www.visitmanchester.com/"
            target="blank"
          >
            <Button>Go Manchester</Button>
          </a>
        </CardBody>
      </Card>
      <Card className="card col-12 col-sm-12 col-md-4 mt-md-5 ml-md-2 mr-md-2 mt-4 pr-2">
        <CardImg
          className="card-img"
          top
          src="https://cimg.visitscotland.com/cms-images/header-images/ois/glasgow?size=md"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>
            <strong>Visit Glasgow</strong>
          </CardTitle>
          <CardText>
            Glasgow Life delivers services on behalf of Glasgow City Council to
            both citizens and visitors to the city, providing opportunities
            through culture, sport and learning. Find out all the essential
            information for travelling to Glasgow for a holiday or vacation by
            rail, air, car, or by sea.
          </CardText>
          <a href="https://peoplemakeglasgow.com/" target="blank">
            <Button>Go Glasgow</Button>
          </a>
        </CardBody>
      </Card>
    </div>
  );
};

export default TouristInfoCards;
