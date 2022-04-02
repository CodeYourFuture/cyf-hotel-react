import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = ({ orderType }) => {
  const [orders, setorders] = useState(0);

  const orderOne = () => {
    console.log("click");
    setorders(orders + 1);
  };

  return (
    <li className="list-item ">
      {orderType}: {orders} <RestaurantButton handleOrderONe={orderOne} />{" "}
    </li>
  );
};

export default Order;
