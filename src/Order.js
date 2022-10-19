import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = props => {
  const [order, setOrder] = useState(0);

  function orderOne() {
    setOrder(order + 1);
  }

  return (
    <li>
      {props.orderType}: {order}
      <RestaurantButton func={orderOne} />
    </li>
  );
};

export default Order;
