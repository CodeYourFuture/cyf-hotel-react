/* eslint-disable indent*/
import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

function Order(props) {
  const [orders, setOrder] = useState(0);
  function addOne() {
    const newQuantity = orders + 1;
    setOrder(newQuantity);
  }
  return (
    <li className="order-list">
      {props.orderType}:{orders}
      <RestaurantButton update={addOne} />
    </li>
  );
}

export default Order;
