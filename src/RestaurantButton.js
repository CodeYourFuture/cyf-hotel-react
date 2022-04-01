import React from "react";

export default function RestaurantButton(props) {
  return (
    <div>
      <button className="btn btn-primary" onClick={props.handleClick}>
        Add
      </button>
    </div>
  );
}
