import React, { useState } from "react";
import RestaurantButtom from "./RestaurantButton";

const NumberOrderPizza = props => {
  let [orders, setOrders] = useState(0);

  const orderOne = () => {
    setOrders(orders + 1);
  };

  return (
    <>
      <li>
        <p>
          {props.orderType} + {orders}
        </p>
        <RestaurantButtom onClick={orderOne} text="buttom" />;
      </li>
    </>
  );
};

export default NumberOrderPizza;
