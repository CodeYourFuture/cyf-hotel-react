import React from "react";

const RestaurantButton = props => {
  return (
    <button className={props.className} onClick={props.handleClick}>
      {props.context}
    </button>
  );
};

export default RestaurantButton;
