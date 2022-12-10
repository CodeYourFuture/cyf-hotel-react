import React, { useState } from "react";
import AddPizzaButton from "./AddPizzaButton";

const Restaurant = () => {
  const [count, orders] = useState(0);

  function orderOne() {
    orders(count + 1);
  }
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>Pizzas: {count}</li>
        <AddPizzaButton orderOne={orderOne} />
      </ul>
    </div>
  );
};

export default Restaurant;
