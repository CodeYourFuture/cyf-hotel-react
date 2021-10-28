import React from "react";

const RestaurantButtons = props => {
  return (
    <div>
      <button onClick={props.handleOrderBtn} className="btn btn-success">
        Add
      </button>
    </div>
  );
};

export default RestaurantButtons;
