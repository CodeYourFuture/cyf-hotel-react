import { useState } from "react";
import RestaurantButton from "./RestaurantButton";

function Order() {
  const [orders, setOrders] = useState(0);

  const orderOne = () => {
    setOrders((order) => order + 1);
  };

  return (
    <li>
      Pizzas: {orders} <RestaurantButton orderOne={orderOne} />
    </li>
  );
}

export default Order;
