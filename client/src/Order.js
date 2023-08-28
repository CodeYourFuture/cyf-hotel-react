import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = ({ orderType }) => {
  const [pizzas, setPizzas] = useState(0);
  const addPizza = () => {
    setPizzas((prev) => prev + 1);
  };
  return (
    <li>
      {orderType}: {pizzas} <RestaurantButton orderOne={addPizza} />
    </li>
  );
};

export default Order;
