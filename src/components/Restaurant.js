import React, { useState } from "react";

let count = 0;

export const Restaurant = () => {
  const [orders, setOrders] = useState(count);
  const orderOne = () => {
    setOrders(count++);
  };

  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {orders}{" "}
          <button onClick={orderOne} className="btn btn-primary">
            Add
          </button>
        </li>
      </ul>
    </div>
  );
};
