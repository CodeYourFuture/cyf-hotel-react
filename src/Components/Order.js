import React, {useState} from "react";
import RestaurantButton from "./RestaurantButton";

function Order({ orderType }) {
  const [orders, setOrders] = useState(0);

  const orderOne = () => {
    setOrders(orders + 1);
  };
  return (
    <li>
      {orderType}: {orders} <RestaurantButton orderOne={orderOne} />
       
    </li>
  );
};

export default Order