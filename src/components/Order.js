import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

function Order(props) {
  const [orders, setOrders] = useState(0);

  function orderOne() {
    return setOrders(orders + 1);
  }

  return (
    <div>
      <li>
        {props.orderType}: {orders}{" "}
      </li>
      <RestaurantButton orderOne={orderOne} />
    </div>
  );
}

export default Order;
