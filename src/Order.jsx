// ** Instructions:** Extract the`<li>` containing "Pizzas" from the`<Restaurant />`
// ** Instructions:** Pass a new prop named`orderType` to the`<Order />`
//component with the value "Pizzas".Then render the`orderType`
//prop instead of "Pizzas" in the`<Order />` component.
//Make sure that "Pizzas" is still displayed on the screen.In the`<ul>`
//list of the`<Restaurant />` component, render 2 others`<Order />` components
//but this time pass different values for the`orderType` prop: "Salads" and "
//Chocolate cake".

import React, { useState } from "react";
import "./Order";
const Order = props => {
  const [foodItems, countFoodItems] = useState(0);
  const incrementCounter = () => {
    countFoodItems(foodItems + 1);
  };
  return (
    <div>
      {props.orderType}:{foodItems}
      <button style={{ marginLeft: "30px" }} onClick={incrementCounter}>
        Add
      </button>
    </div>
  );
};

export default Order;
