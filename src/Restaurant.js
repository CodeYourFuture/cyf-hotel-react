import React, { useState } from "react";

const Restaurant = () => {
  const [order, setCount] = useState(0);
  function orderOne() {
    setCount(order + 1);
  }

  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>Pizzas: {order} </li>
      </ul>
    </div>
  );
};

export default Restaurant;
