import { useState } from "react";
import { RestaurantButton } from "./RestaurantButton.js";

export const Order = ({ orderType }) => {
  let [orders, setOrders] = useState(0);

  const OrderOne = () => {
    console.log("order");
    console.log(orders);
    setOrders((orders += 1));
  };

  return (
    <div className="order-list-container">
      <RestaurantButton orderOne={OrderOne} />
      <li>
        {orderType}: {orders}
      </li>
    </div>
  );
};
