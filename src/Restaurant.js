import React from "react";
import { useState } from "react";
const Restaurant = () => {
  // const pizzas = 0;
  const [orders, setOrders] = useState(0);
  const handleClick = () => {
    orderOne();
  };

  const orderOne = () => {
    setOrders(orders + 1);
  };

  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {orders}{" "}
          <button onClick={handleClick} className="btn btn-primary">
            Add
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
