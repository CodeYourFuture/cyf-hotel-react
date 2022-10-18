import React from "react";

const RestaurantButton = ({ onClick }) => {
  return (
    <>
      <button onClick={onClick} className="btn btn-primary">
        Add
      </button>
    </>
  );
};

export default RestaurantButton;
