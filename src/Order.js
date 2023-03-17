import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton.js";

function Order({ orderType }) {
  const [orders, setOrder] = useState(null);

  function orderOne() {
    setOrder(orders + 1);
  }

  return (
    <>
      <RestaurantButton orderOne={orderOne} />
      <p className="item-name">
        {orderType}: {orders}
      </p>
    </>
  );
}
export default Order;
