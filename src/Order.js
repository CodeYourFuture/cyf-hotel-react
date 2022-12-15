import React, { useState } from "react";
//import Restaurant from "./Restaurant";
import RestaurantButton from "./RestaurantButton";

const Order = props => {
  const [orders, setOrders] = useState(0);

  const orderOne = () => {
    setOrders(orders + 1);
  };
  const delletOrder = () => {
    setOrders(orders => {
      return orders > 0 ? orders - 1 : 0;
    });
  };
  return (
    <ul className="order-type">
      <li>
        {props.orderType}:{orders}
        <RestaurantButton orderOne={orderOne} removeOrder={delletOrder} />
      </li>
    </ul>
  );
};

export default Order;
