import React from "react";
//import Restaurant from './Restaurant';

const RestaurantButton = ({ orderFunction }) => {
  return (
    <button className="btn btn-primary" onClick={orderFunction}>
      Add
    </button>
  );
};

export default RestaurantButton;
