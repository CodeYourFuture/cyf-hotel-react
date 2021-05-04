import React from "react";

const RestaurantButton = props => {
  return (
    <button
      className="btn btn-primary"
      onClick={
        props.order
      } /*will call on order function to increase the order by 1*/
      /* remember to always use the name that assigned to the passing props */
    >
      Add
    </button>
  );
};

export default RestaurantButton;
