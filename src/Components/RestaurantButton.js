import React from "react";

const RestaurantButton = ({ clickAction }) => {
  return (
    <button onClick={clickAction} className="btn btn-primary">
      Add
    </button>
  );
};

export default RestaurantButton;
