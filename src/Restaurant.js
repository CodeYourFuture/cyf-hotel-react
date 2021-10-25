import React, { useState } from "react";

const Restaurant = () => {
  const [order, setOrder] = useState(0);
  function incraseOrder() {
    let newValue = order + 1;
    setOrder(newValue);
  }
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {order}{" "}
          <button className="btn btn-primary" onClick={incraseOrder}>
            Add
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
