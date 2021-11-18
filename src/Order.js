import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

function Order(props) {
  const [order, setOrder] = useState(0);
  function incraseOrder() {
    let newValue = order + 1;
    setOrder(newValue);
  }
  return (
    <div>
      {props.orderType}: {order}
      <RestaurantButton addOrder={incraseOrder} />
    </div>
  );
}
export default Order;
