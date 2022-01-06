import React from "react";
import RestaurantButton from "./RestaurantButton";
import { useState } from "react";

const Order = props => {
  const [orders, setOrders] = useState(0);

  const orderOne = () => {
    setOrders(order => order + 1);
    //console.log(`Number of ${props.orderType} added`, orders + 1);
  };

  const removeOne = () => {
    if (orders >= 1) {
      setOrders(order => order - 1);
    }
  };
  //console.log(`Number of ${props.orderType} added`, orders - 1);

  return (
    <li className="restaurantOrder">
      {props.orderType}: {orders}
      <RestaurantButton addOrder={orderOne} removeOrder={removeOne} />
    </li>
  );
};

export default Order;
