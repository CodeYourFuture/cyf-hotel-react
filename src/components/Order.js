import React, { useState } from "react";
import RestaurantButtons from "../RestaurantButtons";

const Order = ({ orderType }) => {
  const [orders, setOrders] = useState(0); //pizza order count starts at 0

  const OrderOne = () => setOrders(currentOrders => currentOrders + 1); //set order function.// currentOrders = orders.

  return (
    <div>
      <ul>
        <li>
          {orderType}:{orders}
        </li>
      </ul>
      <RestaurantButtons handleOrderBtn={OrderOne} />
    </div>
  );
};
export default Order;
