import React from "react";

function RestaurantButton(props) {
  return (
    <div className="inline">
      <button onClick={props.onClick} className="btn btn-primary">
        Add
      </button>
    </div>
  );
}

export default RestaurantButton;
