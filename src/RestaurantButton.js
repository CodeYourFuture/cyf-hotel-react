import React from "react";
const RestaurantButton = ({ handler, message }) => {
  return (
    <button onClick={handler} className="btn btn-primary restBut">
      Add {message}
    </button>
  );
};
export default RestaurantButton;
