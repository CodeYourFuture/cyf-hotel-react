import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";
function Order({ orderType }) {
  const [order, setOrder] = useState(0);
  function orderOne() {
    setOrder(order + 1);
  }
  return (
    <li className={"container"}>
      {orderType}: {order} <RestaurantButton props={orderOne} />
    </li>
  );
}
export default Order;
