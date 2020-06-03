import React from "react";

const RestaurantButton = props => {
  return (
    <button className="btn btn-primary" onClick={props.handleClick}>
      {props.context}
    </button>
  );
};

export default RestaurantButton;
