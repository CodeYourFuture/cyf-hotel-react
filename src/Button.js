import React from "react";
//  task-11
function RestaurantButton(prop) {
  return (
    <button
      className="btn btn-primary"
      type="button"
      onClick={prop.handleClick}
    >
      {prop.add}
      {prop.close}
    </button>
  );
}

export default RestaurantButton;
