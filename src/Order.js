import React, {useState} from "react";
import RestaurantButton from "./RestaurantButton";

const Order = ({orderType}) => {
  const [order, setOrders] = useState(0);

  function orderOne() {
    setOrders(order + 1);
  }

  const pizzas = 0;
  return (
        <li>
          {orderType}: {order}
          <RestaurantButton prop = {orderOne}/>
        </li>
  );
};

export default Order;