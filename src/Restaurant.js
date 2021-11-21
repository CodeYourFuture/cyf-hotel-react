import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";
const Restaurant = () => {
  let [pizzas, setPizzas] = useState(0);
  const orderOne = () => {
    setPizzas(pizza => ++pizza);
  };
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {pizzas} <RestaurantButton clickHandler={orderOne} />
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
