import { useState } from "react";
import { RestaurantButton } from "./RestaurantButton.js";

export const Order = ({ orderType }) => {
  let [orders, setOrders] = useState(0);

  const orderOne = () => {
    setOrders((orders += 1));
  };

  return (
    <div className="order-list-container">
      <RestaurantButton orderOne={orderOne} />
      <li>
        {orderType}: {orders}
      </li>
    </div>
  );
};
