import React from "react";

export default function RestaurantButton(props) {
  return (
    <div>
      <button className="btn btn-secondary" onClick={props.handleClick}>
        Add
      </button>
    </div>
  );
}
