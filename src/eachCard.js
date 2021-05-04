import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";

const EachCard = props => {
  return props.datas.map((country, index) => {
    return (
      <div key={index} className="col-12 col-lg-4 mb-2 pb-2">
        <Card className="card col-12 bg-dark text-white">
          <CardImg
            className="card-img"
            top
            src={country.image}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>
              <strong>Visit {country.name}</strong>
            </CardTitle>
            <CardText>{country.cardText}</CardText>
            <a href="https://peoplemakeglasgow.com/" target="blank">
              <Button className="btn btn-danger">Go {country.name}</Button>
            </a>
          </CardBody>
        </Card>
      </div>
    );
  });
};

export default EachCard;
