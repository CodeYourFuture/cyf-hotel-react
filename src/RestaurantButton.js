import React, { useState } from "react";

const RestaurantButton = props => {
  console.log(props.decreaseOrder);
  return (
    <div>
      <button className="btn btn-primary" onClick={props.orderOne}>
        Add
      </button>{" "}
      <button className="btn btn-primary" onClick={props.decreaseOrder}>
        -
      </button>{" "}
      <button className="btn btn-primary" onClick={props.cancel}>
        X
      </button>
    </div>
  );
};

export default RestaurantButton;
