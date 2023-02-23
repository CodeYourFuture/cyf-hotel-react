import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = props => {
  const [orders, setOrders] = useState(0);
  function orderOne() {
    setOrders(order => order + 1);
  }

  return (
    <div>
      <ul className="order-type">
        <li>
          {props.orderType} : {orders}
        </li>
      </ul>
      <RestaurantButton orderOne={orderOne} />
    </div>
  );
};

export default Order;
