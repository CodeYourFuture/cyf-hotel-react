import React from "react";

function RestaurantButton({ handleClick }) {
  return (
    <div id="buttonOfOrder">
      <button className="btn btn-primary" onClick={handleClick}>
        Add
      </button>
      <br />
    </div>
  );
}
export default RestaurantButton;
