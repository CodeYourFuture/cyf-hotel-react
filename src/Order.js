import RestaurantButton from "./RestaurantButton";
import { useState } from "react";

function Order({ orderType }) {
  const [orders, setOrders] = useState(0);

  const orderOne = () => {
    setOrders(orders + 1);
  };
  return (
    <li>
      {orderType}: {orders}
      <RestaurantButton orderOne={orderOne} />
    </li>
  );
}
export default Order;
