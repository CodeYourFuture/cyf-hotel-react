import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

// Render order, called by `Restaurant.js`
const Order = () => {
  // Set state variable `pizza` to 0 then when called by the
  // add pizza button increments the count state variable by 1
  const [pizzas, setPizzasQuantity] = useState(0);
  const orderOne = () => setPizzasQuantity(pizzas + 1);

  return (
    <li>
      Pizzas: {pizzas} <RestaurantButton click={orderOne} />
    </li>
  );
};

export default Order;
