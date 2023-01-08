import React from "react";
import { useState } from "react";
import RestaurantButton from "./RestaurantButton";

function incrementCount(value) {
  return value + 1;
}

const Order = ({ orderType }) => {
  const [orders, setOrders] = useState(0);
  const orderOne = () => {
    setOrders(incrementCount);
  };
  return (
    <div>
      {" "}
      <li>
        {" "}
        {orderType}: {orders}
        <RestaurantButton handleClick={orderOne} />
      </li>
    </div>
  );
};

export default Order;
