import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = (props) => {
  const [orders, setOrders] = useState(0);
  const orderOne = () => {
    setOrders((prevOrder) => prevOrder + 1);
  };
  return (
    <li className="font-weight-bold mt-2">
      <span className="mx-2">
        {`${props.orderType} : `} {orders}
      </span>
      <RestaurantButton className="btn btn-primary btn-lg" onClick={orderOne} />
    </li>
  );
};

export default Order;
