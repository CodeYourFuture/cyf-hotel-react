import React from "react";

const RestaurantButton = props => {
  return (
    <div>
      <button className="btn btn-primary" onClick={props.increment}>
        Add
      </button>
    </div>
  );
};

export default RestaurantButton;
