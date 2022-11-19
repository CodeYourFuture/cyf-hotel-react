import React from "react";
import { useState } from "react";

const Restaurant = () => {
  // const pizzas = 0;
  const [pizzas, setPizzas] = useState(0);
  const addPizzas = () => {
    setPizzas(pizzas + 1);
  };
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {pizzas}
          <button className="btn btn-primary" onClick={addPizzas}>
            Add
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
