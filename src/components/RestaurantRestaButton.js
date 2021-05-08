import React from "react";

const RestaurantRestaButton = props => {
  return (
    <div>
      <button onClick={props.reduceOne} className="btn btn-danger mx-2">
        <span>&#8722;</span>
      </button>
    </div>
  );
};

export default RestaurantRestaButton;
