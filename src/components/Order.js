import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = props => {
  const [order, setOrder] = useState(0);
  const [orderType, setOrderType] = useState("Pizza");

  const orderOne = () => {
    setOrder(order + 1);
  };

  const selectOrder = () => {
    setOrderType(props.orderType);
  };

  return (
    <div>
      <li>
        {props.orderType}: {order}
        <RestaurantButton handleClick={orderOne} />
      </li>
    </div>
  );
};

export default Order;
