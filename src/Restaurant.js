import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Restaurant = () => {
  const [pizzas, setPizzas] = useState(0);
  const addPizza = () => {
    setPizzas((prev) => prev + 1);
  };
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {pizzas} <RestaurantButton orderOne={addPizza} />
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
