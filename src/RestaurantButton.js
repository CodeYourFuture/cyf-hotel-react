import React from "react";

export const RestaurantButton = props => {
  return (
    <>
      <button className="btn btn-primary" onClick={props.orderOne}>
        Add
      </button>
      <button className="btn btn-primary" onClick={props.orderLess}>
        less
      </button>
    </>
  );
};
