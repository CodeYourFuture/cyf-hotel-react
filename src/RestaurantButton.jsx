import React from "react";
const RestaurantButton = props => {
  return (
    <>
      <button onClick={props.OrderNumber} className=" btn btn-success">
        Add
      </button>
      <button onClick={props.RemoveNumber} className="btn btn-success">
        Remove
      </button>
    </>
  );
};
export default RestaurantButton;
