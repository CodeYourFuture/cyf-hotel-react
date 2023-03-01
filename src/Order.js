import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";
const Order = props => {
  const [orders, setOrders] = useState(0);
  const orderOne = () => setOrders(orders + 1);
  return (
    <div>
      <ul>
        <li>
          {props.orderType}: {orders} <RestaurantButton orderOne={orderOne} />
        </li>
      </ul>
    </div>
  );
};

export default Order;
