import React, { useState } from "react";

export default function RestaurantButton(props) {
  return (
    <button className="btn btn-primary order-btn" onClick={props.handleClick}>
      Add
    </button>
  );
}
