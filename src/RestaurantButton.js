import React from "react";

const RestaurantButton = props => {
  //   console.log(props.handleClick);
  return (
    <button className="btn btn-primary" onClick={props.handleClick}>
      Add
    </button>
  );
};

export default RestaurantButton;
