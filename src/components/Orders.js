import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = ({ orderType }) => {
  const [orders, setOrders] = useState(0);
  function orderOne() {
    setOrders(orders + 1);
  }
  function removeOne() {
    if (orders > 0) {
      setOrders(orders - 1);
    }
  }
  return (
    <li className="orderCard">
      <p>{`${orderType} : ${orders}`} </p>
      <RestaurantButton orderOne={orderOne} removeOne={removeOne} />
    </li>
  );
};
export default Order;
