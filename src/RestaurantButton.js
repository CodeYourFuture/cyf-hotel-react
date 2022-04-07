import React from "react";

function RestaurantButton(props) {
  return (
    <>
      <button
        onClick={props.handleClick}
        className="btn btn-info restaurant-button"
      >
        Add
      </button>
    </>
  );
}

export default RestaurantButton;
