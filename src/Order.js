import RestaurantButton from "./RestaurantButton";
import { useState } from "react";
function Orders({ orderType }) {
  const [orders, setOrders] = useState(0);
  function incressOrder() {
    setOrders(orders + 1);
  }
  return (
    <li id="listOrder">
      {orderType} : {orders}
      <RestaurantButton handleClick={incressOrder} />
    </li>
  );
}
export default Orders;
