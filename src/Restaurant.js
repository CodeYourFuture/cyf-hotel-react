import React, { useState } from "react";

function Restaurant() {
  const [orders, setOrders] = useState(0);
  function orderOne() {
    setOrders(orders + 1);
  }
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {orders}{" "}
          <button className="btn btn-primary" onClick={orderOne}>
            Add
          </button>
        </li>
        <li>
          Hamburger: {orders}{" "}
          <button className="btn btn-primary" onClick={orderOne}>
            Add
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Restaurant;
