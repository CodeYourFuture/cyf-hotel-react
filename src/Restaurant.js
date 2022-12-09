import React, { useState } from "react";

const orderOne = () => {};

const Restaurant = () => {
  const [order, setOrder] = useState(0);
  function orderOne() {
    setOrder(order + 1);
  }
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {order}{" "}
          <button className="btn btn-primary" onClick={orderOne}>
            Add
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
