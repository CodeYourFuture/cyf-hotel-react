import React, { useState } from "react";
import RestaurantButton from "./RestarantButton";

const Order = ({ orderType }) => {
  const [orders, setOrders] = useState(0);
  const orderOne = _ => setOrders(orders + 1);

  return (
    <div className="items-container">
      <div id="item">
        {orderType}: {orders}
      </div>
      <RestaurantButton orderOne={orderOne} />
    </div>
  );
};

export default Order;
