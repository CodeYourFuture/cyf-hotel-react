import React from "react";
import RestaurantButton from "./RestaurantButton";

function Order(props) {
  return (
    <li>
      Pizzas: {props.countOrders}
      <span> </span> {/*to make a space*/}
      <RestaurantButton functionOnClick={props.functionOrderOne} />
    </li>
  );
}

export default Order;
