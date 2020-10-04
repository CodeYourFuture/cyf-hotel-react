import React from "react";

const RestaurantButton = ({ on }) => {
  return (
    <div>
      <button onClick={on} className="btn btn-primary">
        Add
      </button>
    </div>
  );
};

export default RestaurantButton;
