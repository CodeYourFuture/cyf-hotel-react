import React, { useState } from "react";

const Restaurant = () => {
  // const pizzas = 0;
  let [orders, setOrders] = useState(0);
  function incrementOrder() {
    setOrders(orders + 1);
  }
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {orders}{" "}
          <button onClick={incrementOrder} className="btn btn-primary">
            Add
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
