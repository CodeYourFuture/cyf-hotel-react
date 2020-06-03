import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = props => {
  const [pizzas, setPizzas] = useState(0);
  const [orders, setOrders] = useState(0);

  const orderOne = () => {
    setOrders(orders + 1);
  };
  return (
    <tbody>
      <tr>
        <td>{props.orderType}</td>
        <td>{orders}</td>
        <td>
          <RestaurantButton onClick={orderOne} />
        </td>
      </tr>
    </tbody>
  );
};
export default Order;
