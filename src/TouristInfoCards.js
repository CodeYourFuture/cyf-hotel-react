import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";

const TouristInfoCards = props => {
  return (
    <div className="d-md-flex d-lg-flex mr-lg-5 mr-md-4 mr-2 ml-2">
      <Card className="card bg-dark text-white col-12 col-sm-12 col-md-4 mt-md-5 ml-md-2 mr-md-2 mt-4 pr-2">
        <CardImg
          className="card-img"
          top
          src="https://images.unsplash.com/photo-1531152127291-ea24c3b2a1da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
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
            <Button className="btn btn-danger">Go Glasgow</Button>
          </a>
        </CardBody>
      </Card>
      <Card className="card  bg-dark text-white col-12 col-sm-12 col-md-4 mt-md-5 ml-md-2 mr-md-2 mt-4 pr-2">
        <CardImg
          className="card-img"
          top
          src="https://images.unsplash.com/photo-1523289607602-d9abf1bbd7dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
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
            <Button className="btn btn-danger">Go London</Button>
          </a>
        </CardBody>
      </Card>
      <Card className="card bg-dark text-white col-12 col-sm-12 col-md-4 mt-md-5 ml-md-2 mr-md-2 mt-4 pr-2">
        <CardImg
          className="card-img"
          top
          src="https://images.unsplash.com/photo-1551983627-d46f03818923?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
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
            <Button className="btn btn-dark">Go Manchester</Button>
          </a>
        </CardBody>
      </Card>
    </div>
  );
};

export default TouristInfoCards;
