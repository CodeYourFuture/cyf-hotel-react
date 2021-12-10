import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";
const Order = () => {
  const [pizzas, setPizzas] = useState(0);
  const [chocolate, setChocolate] = useState(0);
  const [salads, setSalads] = useState(0);

  const orderOne = () => {
    setPizzas(pizza => pizza + 1);
  };
  const orderTow = () => {
    setChocolate(chocolate => chocolate + 1);
  };
  const orderThree = () => {
    setSalads(salads => salads + 1);
  };

  return (
    <ul>
      <li>
        Pizzas: {pizzas}
        <RestaurantButton order={orderOne} />
        Chocolate: {chocolate}
        <RestaurantButton order={orderTow} />
        Salads: {salads}
        <RestaurantButton order={orderThree} />
      </li>
    </ul>
  );
};
export default Order;
