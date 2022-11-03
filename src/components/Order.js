import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = props => {
  const [countPizza, setCountPizza] = useState(0);

  function orderOne() {
    setCountPizza(countPizza + 1);
  }

  return (
    <li>
      Pizza: {countPizza}
      <RestaurantButton orderOne={orderOne} />
    </li>
  );
};

export default Order;
