import React from "react";

const RestaurantButton = props => {
  return (
    <>
      <button className="btn btn-primary m-1" onClick={props.orderOne}>
        Add
      </button>
      <button className="btn btn-primary m-1" onClick={props.removeOne}>
        Remove
      </button>
    </>
  );
};

export default RestaurantButton;
