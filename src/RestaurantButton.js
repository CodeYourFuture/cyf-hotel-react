import React from "react";

const RestaurantButton = props => {
  return (
    <div className="restaurant-buttons">
      <button onClick={props.addOrder} className="btn btn-primary">
        Add One
      </button>

      <button onClick={props.removeOrder} className="btn btn-primary">
        Remove One
      </button>
    </div>
  );
};

export default RestaurantButton;
