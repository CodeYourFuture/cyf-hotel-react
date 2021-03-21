import React, { useState } from "react";

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
          Pizzas: {pizzas}{" "}
          <button className="btn btn-primary" onClick={incrementCount}>
            Add
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
