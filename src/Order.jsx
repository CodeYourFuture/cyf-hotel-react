import { useState } from "react";
import RestaurantButton from "./RestaurantButton";

function Order(props) {
    const [orders, setOrders] = useState(0);

    function orderOne() {
    setOrders(order => order + 1); // o for "order"
  }

  return (
    <li>
    {props.orderType}: {orders}
    <RestaurantButton addButton={orderOne} />
  </li>
  )
}

export default Order;