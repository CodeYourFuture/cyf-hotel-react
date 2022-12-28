import React from "react";

export const RestaurantButton = props => {
  return (
    <div>
      <button onClick={props.button} className="btn btn-primary">
        Add
      </button>
    </div>
  );
};
