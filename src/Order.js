import react, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

function Order({ orderType }) {
  // array destructuring
  // setOrders is a function that allows me to modify the value of the orders variable
  // 0 is the initial value
  const [orderCount, setOrderCount] = useState(0);

  function orderOne() {
    setOrderCount((orderCount) => {
      return orderCount + 1;
    });
  }

  return (
    <li>
      {orderType}: {orderCount} <RestaurantButton orderOne={orderOne} />
    </li>
  );
}

export default Order;
