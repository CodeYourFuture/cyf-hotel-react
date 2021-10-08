import React, { useState } from "react";

const Restaurant = () => {
  const [orders, setCountOrders] = useState(0);

  function setOrders() {
    setCountOrders(order => order + 1);
  }

  function orderOne() {
    return setOrders();
  }

  return (
    <div className="container border-top py-5">
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {orders}{" "}
          <button onClick={() => orderOne()} className="btn btn-primary">
            Add
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
