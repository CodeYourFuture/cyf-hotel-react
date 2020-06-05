import React from "react";

const RestaurantButton = props => {
  return (
    <button
      className="btn btn-primary"
      onClick={props.orderOne}
      style={{ margin: "10px" }}
    >
      Add
    </button>
  );
};

export default RestaurantButton;
