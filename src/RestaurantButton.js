import React from "react";

const RestaurantButton = ({prop}) => {
  return (
    <button onClick={prop} className="btn btn-primary">
      Add
    </button>
  );
};

export default RestaurantButton;