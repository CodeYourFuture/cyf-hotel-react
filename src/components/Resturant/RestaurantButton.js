import React from "react";

const RestaurantButton = (props) => {
  return (
    <button className={props.className} onClick={props.onClick}>
      Add
    </button>
  );
};

export default RestaurantButton;
