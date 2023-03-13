import React from "react";

const RestaurantButtons = ({ orderOne }) => {
  return (
    <button className="btn-primary" onClick={orderOne}>
      Add
    </button>
  );
};

export default RestaurantButtons;
