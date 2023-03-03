import React from "react";

const RestaurantButton = props => {
  return (
    <button onClick={props.func} className="btn btn-primary">
      Orders
    </button>
  );
};
export default RestaurantButton;
