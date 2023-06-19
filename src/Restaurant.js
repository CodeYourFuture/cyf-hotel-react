import React, { useState } from "react";

const Restaurant = () => {
  const [orders, setOrders] = useState(0);
  function orderOne() {
    setOrders(orders + 1);
  }
  return (
    <div className="center">
      <h3>Restaurant Orders</h3>
      <ul>
        <span>
          Pizzas: {orders}{" "}
          <button className="btn btn-primary" onClick={orderOne}>
            Add
          </button>
        </span>
      </ul>
    </div>
  );
};

export default Restaurant;
