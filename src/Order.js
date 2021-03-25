import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";
/*
- orders variable initialized to 0 and the setOrders will increment by 1 on button click
- OrderType will be passed as props from the Restaurant and the function order one will be passed to RestaurantButton as a prop

*/
const Order = props => {
  const [orders, setOrders] = useState(0);

  const orderOne = () => {
    setOrders(orders + 1);
  };
  return (
    <li className="m-3 d-inline-block">
      {props.orderType}: {orders} <RestaurantButton orderAdder={orderOne} />
    </li>
  );
};

export default Order;
