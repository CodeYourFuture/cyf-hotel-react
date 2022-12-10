import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = props => {
  const [orders, setOrders] = useState(0);
  function orderOne() {
    setOrders(order => orders + 1);
  }

  return (
    <>
      <li>
        {props.orderType} : {orders}
      </li>
      <RestaurantButton orderOne={orderOne} />
    </>
  );
};

export default Order;
