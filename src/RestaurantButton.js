import React, { useState } from "react";

function  RestaurantButton (props) {
  return (
    <button onClick={props.orderOne} className="btn btn-primary">
      Add
    </button>
  );
};

export default RestaurantButton;