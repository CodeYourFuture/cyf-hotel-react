import React from "react";

const RestaurantButton = props => {
  return (
    <div>
      <button onClick={props.orderRemove} className="btn btn-danger">
        -
      </button>
      <button onClick={props.orderOne} className="btn btn-success">
        +
      </button>
    </div>
  );
};

export default RestaurantButton;
