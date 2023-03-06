import React, { useState } from "react";
import { RestaurantButton } from "./RestaurantButton";

export const Order = props => {
  const [orders, setOrders] = useState(0);

  const orderOne = () => {
    setOrders(orders + 1);
  };

  const orderLess = () => {
    orders > 0 ? setOrders(orders - 1) : setOrders(0);
  };

  return (
    <>
      <li className="restaurant-list">
        {props.orderType}: {orders}
        <RestaurantButton orderOne={orderOne} orderLess={orderLess} />
      </li>
    </>
  );
};
