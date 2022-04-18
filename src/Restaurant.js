import React, { useState } from "react";

const Restaurant = () => {
  const [order, setOrder] = useState(0);
  // const pizzas = 0;

  function orderOne() {
    setOrder(current => {
      return current + 1;
    });
  }

  return (
    <div className="restaurant">
      <h3>Restaurant Orders</h3>
      <ul>
        <li className="pizzas">
          Pizzas: {order}
          <button className="btn btn-primary" onClick={orderOne}>
            Add
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
