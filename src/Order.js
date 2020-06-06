import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";
import Delete from "./DeleteButton";

const Order = props => {
  const [pizzas, setPizzas] = useState(0);
  const [orders, setOrders] = useState(0);
  const [price, setPrice] = useState(0);
  const [bill, setBill] = useState(price);

  const orderOne = () => {
    setOrders(orders + 1);
    setPrice(props.price + price);
  };

  const deleteOne = () => {
    if (orders > 0) {
      setOrders(orders - 1);
      setPrice(price - props.price);
    }
  };
  return (
    <tr>
      <td>{props.orderType}</td>
      <td>{props.price}</td>
      <td>{orders}</td>
      <td>{price}</td>
      <td>
        <RestaurantButton onClick={orderOne} />
      </td>
      <td>
        <Delete onClick={deleteOne} />
      </td>
    </tr>
  );
};
export default Order;
