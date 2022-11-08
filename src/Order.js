import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

function Order({ ordertype }) {
  const [orders, setOrders] = useState(0);

  function orderOne() {
    setOrders(() => orders + 1);
  }
  return (
    <div>
      <li>
        {ordertype}: {orders ? orders : null}{" "}
        <RestaurantButton placeOrder={orderOne} />
      </li>
    </div>
  );
}

export default Order;
