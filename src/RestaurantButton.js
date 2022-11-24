import React from "react";

const RestaurantButton = prop => {
  console.log(prop);
  return (
    <button onClick={prop.orderFunction} className="btn btn-primary">
      Add
    </button>
  );
};

export default RestaurantButton;
