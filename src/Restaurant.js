import React from "react";
import { useState } from "react";
const Restaurant = () => {
  const [orders, setOrders] = useState(0);
  // let orders = useState(0);
  const pizzas = 0;
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {orders}{" "}
          <button
            className="btn btn-primary"
            onClick={() => setOrders(orders + 1)}
          >
            Add
          </button>
        </li>
      </ul>
    </div>
  );
};
function orderOne() {}
export default Restaurant;
