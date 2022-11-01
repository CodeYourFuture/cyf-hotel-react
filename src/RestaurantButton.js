import React from "react";
function RestaurantButton(props) {
  return (
    <div>
      <button className="btn btn-primary" onClick={props.handleClick}>
        Add order
      </button>
    </div>
  );
}
export default RestaurantButton;
