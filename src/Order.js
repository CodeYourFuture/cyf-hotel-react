import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = props => {
  const [orders, setOrders] = useState(0);
  const orderOne = () => {
    setOrders(orders + 1);
  };
  return (
    <div>
      <li className="my-2">
        {props.orderType}: {orders} <RestaurantButton orderOne={orderOne} />
      </li>
    </div>
  );
};

export default Order;
