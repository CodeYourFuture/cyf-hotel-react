import React from "react";

const RestaurantButton = props => {
  return (
    <button className="Button_ResturantButton_CSS" onClick={props.addOne}>
      Add
    </button>
  );
};

export default RestaurantButton;
