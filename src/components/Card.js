import React from "react";
import Image from "./Image";
import Title from "./Title";
import Info from "./Info";
import Button from "./Button";

const Card = props => {
  return (
    <div className="card">
      <Image image={props.image} />
      <div className="card-body">
        <Title cityName={props.cityName} />
        <Info cityInfo={props.info} />
        <Button link={props.link} />
      </div>
    </div>
  );
};

export default Card;
