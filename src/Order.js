import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = props => {
  const [orders, setOrders] = useState(0);
  const orderOne = () => {
    setOrders(orders + 1);
  };
  return (
    <li className="p-2">
      <span className="mr-2">
        {" "}
        {props.orderType}: {orders}{" "}
      </span>
      <RestaurantButton orderOne={orderOne} />
    </li>
  );
};

export default Order;
