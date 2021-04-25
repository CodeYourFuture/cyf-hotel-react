import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton.js";

const Order = props => {
  const [order, setOrder] = useState(0);
  const orderOne = () => setOrder(order + 1);

  return (
    <li className="list-group-item m-3 m-auto order">
      {props.orderType}: {order}
      <RestaurantButton handleClick={orderOne} />
    </li>
  );
};

export default Order;
