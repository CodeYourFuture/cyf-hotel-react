import React from "react";
import { useState } from "react";

const Restaurant = () => {
  const [order, setOrders] = useState(0);
  const pizzas = 0;
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {order}{" "}
          <button
            className="btn btn-primary"
            onClick={() => setOrders(order + 1)}
          >
            Add
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
