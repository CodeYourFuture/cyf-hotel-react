import React from "react";

const RestaurantButton = ({orderOne, deleteOne}) => {
  return (
    <div>
      <button onClick={orderOne} className="btn btn-primary btn-margin">
        Add
      </button>
      <button onClick={deleteOne} className="btn btn-primary btn-margin">
        Delete
      </button>
    </div>
  );
};

export default RestaurantButton;

