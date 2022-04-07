import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = prop => {
  const [order, setOrder] = useState(0);

  const orderOne = () => {
    setOrder(v => v + 1);
  };

  return (
    <li>
      {prop.orderType}: {order}
      <RestaurantButton prop={orderOne} />
    </li>
  );
};

export default Order;
