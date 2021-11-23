import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";
const Order = () => {
  const [pizzas, setPizzas] = useState(0);
  const orderOne = () => {
    setPizzas(pizza => pizza + 1);
  };
  return (
    <li>
      Pizzas: {pizzas}
      <RestaurantButton order={orderOne} />
    </li>
  );
};
export default Order;
