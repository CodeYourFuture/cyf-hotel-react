import React from "react";

const RestaurantButton = (props) => {
  return (
    <button
      className="btn btn-primary button add-order-button"
      onClick={props.order}
    >
      Add
    </button>
  );
};

export default RestaurantButton;
