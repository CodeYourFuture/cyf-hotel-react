import React from "react";

const RestaurantSumaButton = props => {
  return (
    <button onClick={props.orderOne} className="btn btn-success mx-2">
      <span>&#43;</span>
    </button>
  );
};

export default RestaurantSumaButton;
