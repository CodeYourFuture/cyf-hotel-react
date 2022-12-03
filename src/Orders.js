import React, {useState} from "react";
import RestaurantButton from "./RestaurantButton"

const Order = ({orderType}) =>
{
  const [order, addOrder] = useState(0);

  const orderOne = () =>
  {
    addOrder(order + 1);
  }

  return (
    <li>
        {orderType}: {order} <RestaurantButton orderOne = {orderOne}/>
    </li>
  );
};

export default Order;
