import React from "react";
import { useState } from "react";

const RestaurantButton = props => {
  return (
    <button className="btn btn-primary" onClick={props.onAdd}>
      Add
    </button>
  );
};
export default RestaurantButton;
