import React from "react";

function RestaurantButton(props) {
  return (
    <div>
      <button
        name="thirdButton"
        onClick={props.handleClick}
        className="btn btn-primary"
      >
        Add
      </button>
    </div>
  );
}

export default RestaurantButton;
