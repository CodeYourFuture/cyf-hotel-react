import React from "react";
const RestaurantButton = props => {
  return (
    <button onClick={props.OrderNumber} className="btn btn-success">
      Add
    </button>
  );
};
export default RestaurantButton;
