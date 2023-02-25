import React, { useState } from "react";
// import from "react";

const Restaurant = () => {
  let [order, setOrders] = useState(0);
  function orderOne() {
    setOrders(order + 1);
  }

  //same as the line above
  // const state = useState(0)
  // const order = state[0];
  // const setOrder = state[1];

  const pizzas = 0;
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {order}
          <button onClick={orderOne} className="btn btn-primary">
            Add
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
