import React, { useState } from "react";

const RestaurantButton = props => (
  <button className="btn btn-primary" onClick={props.handleEvent}>
    Add
  </button>
);

export default RestaurantButton;
