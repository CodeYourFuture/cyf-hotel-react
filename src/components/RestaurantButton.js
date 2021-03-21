import React from "react";

const RestaurantButton = props => {
  return (
    <div>
      <button className="btn btn-primary" onClick={props.setPizzas}>
        Add
      </button>
    </div>
  );
};

export default RestaurantButton;
