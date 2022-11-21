import React from "react";
import React, { useState } from "react";

const Restaurant = () => {
  const pizzas = 0;
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {pizzas} <button className="btn btn-primary">Add</button>
        </li>
      </ul>
    </div>
  );
};

function Orders() {
  const [orders, setCount] = useState(0);

  function incrementOrder() {
    setCount(1);
  }

  return (
    <div>
      <button onClick={incrementOrder}>Click me</button>
      <p>You clicked {orders} times</p>
    </div>
  );
}

export default Restaurant;
