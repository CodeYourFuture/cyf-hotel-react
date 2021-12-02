import React from "react";

const RestaurantButton = ({ clickEvent }) => {
  return (
    <button className="btn btn-primary" onClick={clickEvent}>
      Add
    </button>
  );
};

export default RestaurantButton;
