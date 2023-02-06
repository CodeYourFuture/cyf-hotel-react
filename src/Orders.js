import React, { useState } from "react";
import AddPizzaButton from "./AddPizzaButton";

const Orders = props => {
  const [count, orders] = useState(0);
  function orderOne() {
    orders(count + 1);
  }
  const orderType = "Pizzas";
  return (
    <div>
      <li>
        {props.orderType}: {count}
      </li>
      <AddPizzaButton orderOne={orderOne} />
    </div>
  );
};

export default Orders;
