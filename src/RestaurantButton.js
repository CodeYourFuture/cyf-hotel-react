import React from "react";

const RestaurantButton = props => {
  return (
    <div>
      <button onClick={props.handleOrder} className="btn btn-primary">
        Add
      </button>
    </div>
  );
};

export default RestaurantButton;
