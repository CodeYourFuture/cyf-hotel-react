import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = props => {
  const [orders, setOrders] = useState(() => 0);
  const orderOne = () => {
    setOrders(prevValue => prevValue + 1);
  };
  const orderOneLess = () => {
    setOrders(prevValue => prevValue - 1);
  };

  return (
    <ol>
      <li className="order-li">
        {props.orderType}: {orders}
        <RestaurantButton Quantity={orderOne} Quantity2={orderOneLess} />
      </li>
    </ol>
  );
};

export default Order;
