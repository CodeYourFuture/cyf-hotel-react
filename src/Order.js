import react, { useState } from "react";
import RestaurantButton from "./RestaurantButton";
const Order = () => {
  const [order, setOrder] = useState(0);
  function orderOne() {
    setOrder(order + 1);
  }
  return (
    <li>
      Pizzas: {order} <RestaurantButton onClickHandler={orderOne} />
    </li>
  );
};

export default Order;
