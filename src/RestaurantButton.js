import React from "react";

const RestaurantButton = prop => {
  return (
    <div>
      <button onClick={prop.orders} className="btn btn-primary">
        Add
      </button>
      &nbsp;&nbsp;
      <button onClick={prop.cancel} className="btn btn-primary">
        Cancel
      </button>
    </div>
  );
};

export default RestaurantButton;
