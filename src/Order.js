import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

export default function Order({ orderType }) {
  const [order, setOrder] = useState(0);
  function orderOne() {
    setOrder(order + 1);
  }
  return (
    <>
      <li style={{ margin: "20px" }}>
        {orderType}:{order}
        <RestaurantButton orderOneProps={orderOne} />
      </li>
    </>
  );
}
