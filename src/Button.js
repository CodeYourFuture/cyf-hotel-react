import React from "react";
//  task-11
function RestaurantButton(props) {
  return (
    <button className="btn btn-primary" onClick={props.handleClick}>
      Add
    </button>
  );
}

export default RestaurantButton;
