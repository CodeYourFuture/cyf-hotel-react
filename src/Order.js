import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = ({ orderType }) => {
  const [order, setOrder] = useState(0);

  const orderOne = () => {
    setOrder(order + 1);
  };
  return (
    <li>
      {orderType} :{order}
      <RestaurantButton onClick={orderOne} />
    </li>
  );
};

export default Order;
