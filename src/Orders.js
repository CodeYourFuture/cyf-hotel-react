import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Orders = props => {
  const [orders, setOrders] = useState(0);

  const orderOne = () => {
    setOrders(orders + 1);
  };

  return (
    <li>
      <span>{props.orderType} </span>
      <span>{orders} </span>
      <span>
        <RestaurantButton orderOne={orderOne} />
      </span>
    </li>
  );
};
export default Orders;
