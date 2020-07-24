import React from "react";

const RestaurantButton = ({ clickEvent }) => {
  return (
    <div>
      <button onClick={clickEvent} className="btn btn-primary">
        Add
      </button>
    </div>
  );
};

export default RestaurantButton;
