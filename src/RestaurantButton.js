import React from "react";

const RestaurantButton = props => {
  return (
    <button className="btn btn-primary" onClick={props.addOrder}>
      Add
    </button>
  );
};

export default RestaurantButton;
