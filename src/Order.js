import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";
const Order = props => {
  const [orders, setOrders] = useState(0);
  let orderOne = () => {
    return setOrders(add => add + 1);
  };
  return (
    <div className="orderAndButton">
      <li className="h5">
        {props.orderType}: {orders}
        {"  "}
      </li>{" "}
      <RestaurantButton handleClick={orderOne} />
    </div>
  );
};
export default Order;
