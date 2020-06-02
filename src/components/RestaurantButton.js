import React from "react";

export default function RestaurantButton(props) {
  return (
    <button className="btn btn-primary" onClick={props.handleOrder}>
      Add
    </button>
  );
}
