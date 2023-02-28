import React from "react";

const RestaurantButton = ({prop}) => {
  return (
    <button onClick={prop} className="btn btn-primary">
      Add
    </button>
  );
};

export default RestaurantButton;

// 11. Extract the Add button to its own component
// Instructions: Extract the <button> currently in the <Restaurant /> component
// to a new component named RestaurantButton. Pass the orderOne function as a prop
// to the <RestaurantButton /> component and use this prop in the onClick handler.

// Test: Clicking the button should still increment the number of pizzas.
