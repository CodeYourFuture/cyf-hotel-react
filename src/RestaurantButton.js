import React from "react";

const RestaurantButton = ({ clickEvent }) => {
  return (
    <button onClick={clickEvent} className="btn btn-success mx-5">
      Add
    </button>
  );
};

export default RestaurantButton;
