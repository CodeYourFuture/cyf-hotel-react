import React, { useState } from "react";

const RestaurantButton = props => {
  return (
    <div>
      <button
        className="btn bg-info text-nowrap text-white"
        onClick={props.orderOne}
      >
        Add
      </button>{" "}
      <button
        className="btn bg-info text-nowrap text-white"
        onClick={props.decreaseOrder}
      >
        -
      </button>{" "}
      <button
        className="btn bg-info text-nowrap text-white"
        onClick={props.cancel}
      >
        X
      </button>
    </div>
  );
};

export default RestaurantButton;
