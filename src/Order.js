import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";
const Order = ({ orderType }) => {
  const [orders, setOrders] = useState(0);
  const orderOne = () => {
    return setOrders(orders + 1);
  };
  return (
    <div>
      <il>
        {orderType}: {orders}
      </il>
      <RestaurantButton handleClick={orderOne} />{" "}
    </div>
  );
};
export default Order;
