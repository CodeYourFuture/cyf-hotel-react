import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";
import Restaurant from "./Restaurant";

const Orders = props => {
  const [orders, setOrders] = useState(0);

  function orderOne() {
    setOrders(c1 => {
      return c1 + 1;
    });
  }

  return (
    <div>
      <ul>
        <li>
          {props.orderType}: {orders} <RestaurantButton order={orderOne} />
        </li>
      </ul>
    </div>
  );
};

export default Orders;
