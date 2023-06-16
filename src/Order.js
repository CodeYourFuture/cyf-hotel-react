import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = (props) => {
  const [orders, setOrders] = useState(0);
  const orderOne = () => {
    setOrders((prevOrder) => prevOrder + 1);
  };
  return (
    <li>
      {`${props.orderType} : `} {orders}
      <RestaurantButton className="btn btn-primary" onClick={orderOne} />
    </li>
  );
};

export default Order;
