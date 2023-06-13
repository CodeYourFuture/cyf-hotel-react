import React from "react";
import Card from "./Card"

const InfoCard = (props) => {
  return (
    <Card className="card">
      <img src={props.img} className="card-img-top" />
      <div className="card-body text-center">
        <h2>{props.cityTitle}</h2>
        <p className="text-start">{props.cityDescription}</p>
        <a href={props.cityWebsite} className="btn btn-primary" target="_blank">
          More Information
        </a>
      </div>
    </Card>
  );
};
export default InfoCard;
