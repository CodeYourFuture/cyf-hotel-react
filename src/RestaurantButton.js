import React, { useState } from "react";

const RestaurantButton = props => {
  return (
    <button onClick={props.order} className="rBtn btn btn-primary">
      Add
    </button>
  );
};

export default RestaurantButton;
