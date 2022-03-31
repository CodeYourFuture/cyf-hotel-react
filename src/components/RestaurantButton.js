import React from "react";

const RestaurantButton = (props) => {
  return (
    <div className="restaurant-buttons">
      <button onClick={props.addOrder} className="Btn-2 btn-primary">
        Add
      </button>

      <button onClick={props.removeOrder} className="Btn-2 btn-primary">
        Remove
      </button>
    </div>
  );
};

export default RestaurantButton;
