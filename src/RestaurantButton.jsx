import React from "react";
//import React, { useState } from "react";

export default function RestaurantButton(props) {
  return (
    <button className="btn btn-primary" onClick={props.orderOne}>
      Add
    </button>
  );
}
