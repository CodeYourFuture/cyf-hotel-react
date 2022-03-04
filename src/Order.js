import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = props => {
  const [orders, setOrders] = useState(0);

  const orderOne = e => {
    return e.target.value === "add"
      ? setOrders(currentValue => currentValue + 1)
      : setOrders(currentValue => currentValue - 1);
  };

  return (
    <div>
      <li>
        {props.orderType}: {orders}
      </li>
      <RestaurantButton addFood={orderOne} name={"Add"} value="add" />
      <RestaurantButton addFood={orderOne} name={"Delete"} value="delete" />
    </div>
  );
};

export default Order;
