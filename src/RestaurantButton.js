import React from "react";

const RestaurantButton = prop => {
  console.log(prop);
  return (
    <div>
      <button onClick={prop.ordering} className="btn btn-primary">
        Order{" "}
      </button>
    </div>
  );
};

export default RestaurantButton;
