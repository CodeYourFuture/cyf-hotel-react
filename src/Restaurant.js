import React, { useState } from "react";
import Order from "./Order";

const Restaurant = () => {
  const [orders, setOrders] = useState(0);

  function orderOne() {
    setOrders(orders + 1); // orders = orders + 1;
  }

  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order countOrders={orders} functionOrderOne={orderOne} />
      </ul>
    </div>
  );
};

export default Restaurant;
