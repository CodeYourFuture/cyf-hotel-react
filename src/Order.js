import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = props => {
  const [oders, setOders] = useState(0);

  function orderOne() {
    setOders(oders + 1);
  }

  return (
    <div>
      <ul>
        <li>
          <RestaurantButton handleClick={orderOne} />
          pizzas: {oders}
          {props.orderType}
        </li>
      </ul>
    </div>
  );
};
export default Order;
