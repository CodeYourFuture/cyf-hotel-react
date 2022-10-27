import React from "react";

function RestaurantButton(props) {
  return (
    <div>
      <button
        name="secondButton"
        onClick={props.handleClick}
        className="btn btn-primary"
      >
        Add
      </button>
    </div>
  );
}

export default RestaurantButton;
