import React, { useState } from "react";

const Restaurant = () => {
  // const pizzas = 0;
  const [orders, setCount] = useState(0);
  function orderOne() {
    setCount(orders + 1);
  }
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {orders}
          <button onClick={() => orderOne()} className="btn btn-primary">
            Add
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
