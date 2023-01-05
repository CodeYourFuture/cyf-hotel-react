import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = props => {
  const [orders, setOrders] = useState(0);

  function orderOne() {
    setOrders(orders + 1);
  }

  return (
    <li>
      <div className="order-row">
        <div className="order-cell">
          {props.orderType}: {orders}
        </div>
        <div className="order-cell">
          <RestaurantButton handleClick={orderOne} />
        </div>
      </div>
    </li>
  );
};

export default Order;
