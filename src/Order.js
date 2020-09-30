import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = prop => {
  const [pizzas, setPizzas] = useState(0);
  function setOrders() {
    setPizzas(pizzas + 1);
  }

  return (
    <li>
      {prop.dish}: {pizzas} <RestaurantButton addPizza={setOrders} />
    </li>
  );
};
export default Order;
