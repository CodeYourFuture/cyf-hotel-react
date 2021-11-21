import React, { useState } from "react";

const Restaurant = () => {
  let [pizzas, setPizzas] = useState(0);
  const addPizza = () => {
    setPizzas(pizza => ++pizza);
  };
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {pizzas}{" "}
          <button onClick={addPizza} className="btn btn-primary">
            Add
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
