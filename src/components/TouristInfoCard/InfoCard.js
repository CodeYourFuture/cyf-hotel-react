import React from "react";
import Card from "../UI/Card";
import classes from "./InfoCard.module.css";

const InfoCard = (props) => {
  return (
    <Card className={`card ${classes["card_container"]}`}>
      <img src={props.img} className="card-img-top" style={{ height: 200 }} />
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
