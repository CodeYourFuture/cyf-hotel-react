import React, { useState } from "react";

const Restaurant = () => {
  const [orders, setCountOrders] = useState(0);

  function setOrders() {
    setCountOrders(order => order + 1);
  }
  return (
    <div className="container border-top py-5">
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {orders}{" "}
          <button onClick={() => setOrders()} className="btn btn-primary">
            Add
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
