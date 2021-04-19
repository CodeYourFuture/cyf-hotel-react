import React, { useState } from "react";

const RestaurantButton = ({ prop }) => {
  return (
    <button className="btn btn-primary" onClick={prop}>
      Add
    </button>
  );
};

export default RestaurantButton;
