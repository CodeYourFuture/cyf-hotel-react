import React from "react";

let RestaurantButton = props => {
  return (
    <div>
      <button onClick={props.ordering} className="btn btn-primary">
        Add
      </button>
    </div>
  );
};

export default RestaurantButton;
