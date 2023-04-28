import React from "react";

function RestaurantButton(props) {
  return (
    <div>
      <button
        name="secondButton"
        onClick={props.handleClick}
        className="btn btn-danger"
      >
        Buy
      </button>
    </div>
  );
}

export default RestaurantButton;
