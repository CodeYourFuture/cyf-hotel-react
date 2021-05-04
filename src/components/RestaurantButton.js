import React from "react";

const RestaurantButton = props => {
  return (
    <div>
      <button className="btn btn-primary" onClick={props.orderOne}>
        Add
      </button>

      <button className="btn btn-primary" onClick={props.orderTwo}>
        decrease
      </button>
    </div>
  );
};

export default RestaurantButton;
