import React from "react";
import {  useState} from "react";
import RestaurantButton from "./RestaurantButton";

function Order(props) {

    const [orders, setOrders] = useState(0);

    function orderOne() {
      return setOrders(orders + 1);
    }

  return (
    <div>
      <li>
        {props.name}: {orders}
        <RestaurantButton orderFunction={orderOne} />
      </li>
    </div>
  );  
}

export default Order;