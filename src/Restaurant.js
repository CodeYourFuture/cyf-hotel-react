import React, { useState } from "react";
import RestaurantButton from "./components/RestaurantButton.js";
import Order from "./components/Order.js";

const Restaurant = () => {
  const [pizzas, setPizzas] = useState(0);

  function orderOne() {
    setPizzas(pizzas + 1);
  }

  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order pizzas={pizzas} />
        <RestaurantButton setPizzas={orderOne} />
      </ul>
    </div>
  );
};

export default Restaurant;
