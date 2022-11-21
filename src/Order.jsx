import RestaurantButton from "./RestaurantButton";
import { useState } from "react";

function Order() {
  const [orders, setOrders] = useState(0);
  function orderOne() {
    setOrders(orders + 1);
  }
  return (
    <div>
      <li>
        Pizzas: {orders}
        <RestaurantButton orderOne={orderOne} />
      </li>
    </div>
  );
}

export default Order;
