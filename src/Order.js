import RestaurantButton from "./RestaurantButton";
import { useState } from "react";
function Orders() {
  const [orders, setOrders] = useState(0);
  function incressOrder() {
    setOrders(orders + 1);
  }
  return (
    <li>
      Pizzas: {orders}
      <RestaurantButton handleClick={incressOrder} />
    </li>
  );
}
export default Orders;
