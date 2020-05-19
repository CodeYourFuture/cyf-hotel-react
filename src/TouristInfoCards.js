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
          width="100%"
          src="/assets/318x180.svg"
          alt="Card image cap"
        />
        <CardBody className="card-text">
          <CardTitle>Card title</CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card className="card col-12 col-sm-12 col-md-4 mt-md-5 ml-md-2 mr-md-2 mt-4 pr-2">
        <CardImg
          className="card-img"
          top
          width="100%"
          src="/assets/318x180.svg"
          alt="Card image cap"
        />
        <CardBody className="card-text">
          <CardTitle>Card title</CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card className="card col-12 col-sm-12 col-md-4 mt-md-5 ml-md-2 mr-md-2 mt-4 pr-2">
        <CardImg
          className="card-img"
          top
          width="100%"
          src="/assets/318x180.svg"
          alt="Card image cap"
        />
        <CardBody className="card-text">
          <CardTitle>Card title</CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default TouristInfoCards;
