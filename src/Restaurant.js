import React, { useState } from "react";

const Restaurant = () => {
  const [order, setCount] = useState(0);
  function orderOne() {
    setCount(order + 1);
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
