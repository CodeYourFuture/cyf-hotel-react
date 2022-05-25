import React from "react";

function RestaurantButton(props) {
  return (
    <div>
      <button onClick={props.Quantity} className="btn btn-primary">
        {" "}
        Add the Order
      </button>
      <button onClick={props.Quantity2} className="btn btn-primary">
        {" "}
        Remove the order
      </button>
    </div>
  );
}

export default RestaurantButton;
