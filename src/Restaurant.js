import React, { useState } from "react";

const Restaurant = () => {
  //const pizzas = 0;
  const [orders, setOrders] = useState(0);
  function incrementOrders() {
    setOrders(orders + 1);
  }
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {orders}{" "}
          <button className="btn btn-primary" onClick={incrementOrders}>
            Add
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
