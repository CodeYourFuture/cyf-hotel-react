import React, { useState } from "react";

const RestaurantButton = props => {
  return (
    <button className="btn btn-primary" onClick={props.clickEVent}>
      Add
    </button>
  );
};

export default RestaurantButton;
