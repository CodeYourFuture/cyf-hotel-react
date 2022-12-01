import React from "react";

const RestaurantButton = ({ orderOne, buttonText }) => {
  return (
    <div>
      <button className="btn btn-primary m-2" onClick={orderOne}>
        {buttonText}
      </button>
    </div>
  );
};

RestaurantButton.propTypes = {};

export default RestaurantButton;
