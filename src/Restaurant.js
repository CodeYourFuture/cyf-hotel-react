import React, { useState } from "react";

const Restaurant = () => {
  const [orders, setOrders] = useState(0);

  const orderOne = () => {
    setOrders(orders + 1);
  };
  return (
    <div className="text-center">
      <h3>Restaurant Orders</h3>
      <ul>
        <li className="list-unstyled">
          Pizzas: {orders}{" "}
          <button onClick={orderOne} className="btn btn-info">
            Add
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
