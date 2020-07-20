import React, { useState } from "react";

const Restaurant = () => {
  const [orders, setOrders] = useState(0);

  function incrementCount() {
    setOrders(orders + 1);
  }

  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {orders}{" "}
          <button className="btn btn-primary" onClick={incrementCount}>
            Add
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
