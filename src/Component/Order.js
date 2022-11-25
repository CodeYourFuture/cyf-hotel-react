import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = props => {
  const [orders, setOrders] = useState(0);

  const orderOne = () => {
    setOrders(orders + 1);
  };

  const cancelOrder = () => {
    setOrders(orders => {
      return orders > 0 ? orders - 1 : 0;
    });
  };
  return (
    <ul className="order-type">
      <li>
        {/* Pizzas: {orders} */}
        {props.orderType} : {orders}
        <RestaurantButton orderOne={orderOne} removeOrder={cancelOrder} />
      </li>
    </ul>
  );
};

export default Order;
