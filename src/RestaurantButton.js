import React from "react";

function RestaurantButton(props) {
  return (
    <div>
      <button className="btn btn-primary" onClick={props.orderone}>
        Add
      </button>
    </div>
  );
}
export default RestaurantButton; 
