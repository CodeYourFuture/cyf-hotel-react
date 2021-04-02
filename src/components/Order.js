import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton.js";

const Order = props => {
  const [order, setOrder] = useState(0);
  function orderOne() {
    setOrder(order + 1);
  }

  return (
    <li>
      {props.orderStyle}: {order}
      <RestaurantButton orderOne={orderOne} />
    </li>
  );
};

export default Order;
