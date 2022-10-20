import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

function Order({ orderType }) {
  const [order, setOrders] = useState(0);
  function orderOne() {
    setOrders(order + 1);
  }

  return (
    <>
      <li>
        {orderType}: {order} <RestaurantButton order={orderOne} />
      </li>
    </>
  );
}

export default Order;
