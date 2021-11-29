import { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Restaurant = () => {
  const [orders, setOrders] = useState(0);

  const orderOne = () => {
    setOrders((order) => order + 1);
  };

  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {orders} <RestaurantButton orderOne={orderOne} />
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
