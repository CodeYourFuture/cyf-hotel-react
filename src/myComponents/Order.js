import React, { useState } from "react";

import RestaurantButton from "./RestaurantButton";

export default function Order({ orderType }) {
  const [orders, setOrders] = useState(0);

  function orderOne() {
    setOrders(s => s + 1);
  }
  return (
    <>
      <li style={{ margin: "20px" }}>
        {orderType}: {orders}
        <RestaurantButton orderOneProp={orderOne} />
      </li>
    </>
  );
}
