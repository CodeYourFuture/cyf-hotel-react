import React from "react";

const RestaurantButton = (props) => {
  return (
    <div>
      <button onClick={props.orderOne} className="btn btn-primary">
        +
      </button>
      <button onClick={props.orderRemove} className="btn btn-primary">
        -
      </button>
    </div>
  );
};

export default RestaurantButton;
