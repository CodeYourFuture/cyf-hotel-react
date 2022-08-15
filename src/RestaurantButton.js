import React from "react";

const RestaurantButton = props => {
  return (
    <div className="d-flex">
      <button
        className="order-btn btn btn-dark ml-4 col-6"
        onClick={props.handleClick}
      >
        Add
      </button>
      <button
        className="order-btn btn btn-dark ml-4 col-6"
        onClick={props.handleClickDown}
      >
        remove
      </button>
    </div>
  );
};

export default RestaurantButton;
