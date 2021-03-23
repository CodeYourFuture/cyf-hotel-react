import React from "react";
// pizzaAdder passed as destructured object instead of the whole object Props
const RestaurantButton = ({ orderAdder }) => {
  return (
    <button className="btn btn-dark" onClick={orderAdder}>
      Add
    </button>
  );
};

export default RestaurantButton;
