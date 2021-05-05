import React from "react";

const RestaurantButton = props => {
  return (
    <div>
      <button onClick={props.data} className="btn btn-primary">
        Add{" "}
      </button>
    </div>
  );
};

export default RestaurantButton;
