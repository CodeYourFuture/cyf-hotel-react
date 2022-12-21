import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

export default function Order({ OrderType }) {
  const [order, setOrder] = useState(0);
  function orderOne() {
    setOrder(order + 1);
  }
  return (
    <>
      <li>
        {OrderType}: {order}
        <RestaurantButton orderOneProps={orderOne} />
      </li>
    </>
  );
}
