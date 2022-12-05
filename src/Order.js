import RestaurantButton from "./RestaurantButton";
import { useState } from "react";

function Order({ orderType }) {
  const [orders, setOrders] = useState(0);

  const orderOne = () => {
    setOrders(orders + 1);
  };
  const removeOrderOne = () => {
    if (orders >= 1) {
      setOrders(orders - 1);
    }
  };
  return (
    <li>
      {orderType}: <span>{orders}</span>
      <RestaurantButton orderOne={orderOne} removeOrderOne={removeOrderOne} />
    </li>
  );
}
export default Order;
