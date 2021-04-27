import React, { useState } from "react";

const Restaurant = () => {
  const [orders, setOrders] = useState(0);

  const orderOne = () => {
    return setOrders(orders + 1);
  };
  return (
    <div>
      <h3 className="text-center">Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas:{orders}
          <br />
          <button onClick={orderOne} className="btn btn-primary m-2">
            Add
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
