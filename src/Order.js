import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = props => {
  const [orders, setOrders] = useState(0);

  const orderOne = () => {
    setOrders(orders => {
      let addOne = orders + 1;
      return addOne;
    });
  };
  return (
    <li className="mt-2">
      {props.orderType}: {orders} <RestaurantButton orderOne={orderOne} />
    </li>
  );
};

export default Order;
