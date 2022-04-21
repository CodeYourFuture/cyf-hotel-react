import React from "react";
import Restaurant from "./Restaurant.js";

const restaurantBtn = props => {
  return (
    <button className="btn btn-primary" onClick={props.onHandler}>
      Add
    </button>
  );
};

export default restaurantBtn;
