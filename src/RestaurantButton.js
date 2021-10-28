import React, { useState } from "react";

const RestaurantButton = props => {
  console.log(props);
  return (
    <div>
      <button
        className="btn bg-info text-nowrap text-white m-2 rounded-circle"
        onClick={props.order}
      >
        +
      </button>{" "}
      <button
        className="btn bg-info text-nowrap text-white rounded-circle"
        onClick={props.reduce}
      >
        -
      </button>{" "}
      <button
        className="btn bg-info text-nowrap text-white rounded-circle "
        onClick={props.cancel}
      >
        x
      </button>
    </div>
  );
};

export default RestaurantButton;
