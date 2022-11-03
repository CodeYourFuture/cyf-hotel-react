import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = () => {
  const [countPizza, setCountPizza] = useState(0);

  function orderOne() {
    setCountPizza(countPizza + 1);
  }

  return (
    <li>
      Pizzas: {countPizza}
      <RestaurantButton orderOne={orderOne} />
    </li>
  );
};

export default Order;
