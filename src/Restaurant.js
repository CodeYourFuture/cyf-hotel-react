import React, { useState } from "react";
import RestaurantButton from "./components/RestaurantButton.js";

const Restaurant = () => {
  const [pizzas, setPizzas] = useState(0);

  function incrementCount() {
    setPizzas(pizzas + 1);
  }

  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {pizzas}
          <RestaurantButton setPizzas={incrementCount} />
          {/* <button className="btn btn-primary" onClick={incrementCount}>
            Add
          </button> */}
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
