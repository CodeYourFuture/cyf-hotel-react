import RestaurantButton from "./RestaurantButton";
import React, { useState } from "react";
const Order = props => {
  const [order, setOrder] = useState(0);
  function orderOne() {
    setOrder(order + 1);
  }

  return (
    <li>
      {props.orderType}: {order}
      <RestaurantButton order={orderOne} />
    </li>
  );
};
export default Order;
