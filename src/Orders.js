import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";
function Orders(props) {
  const [orders, setOrders] = useState(0);

  function orderOne() {
    setOrders(function(order) {
      return order + 1;
    });
  }

  return (
    <div>
      <li>
        {props.orderType}: {orders}
        <RestaurantButton handleClick={orderOne} />
      </li>
    </div>
  );
}
export default Orders;
