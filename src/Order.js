import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";
const Order = props => {
  const [Orders, setOrders] = useState(0);
  const orderOne = () => {
    setOrders(Orders + 1);
  };
  return (
    <li>
      {props.orderType}: {Orders} &nbsp;
      <RestaurantButton order={orderOne} />
    </li>
  );
};
export default Order;
