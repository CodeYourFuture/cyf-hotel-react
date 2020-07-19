import React, { useState } from "react";

import RestaurantButton from "./RestaurantButton";

const OrderSalad = () => {
  //const types=["Pizza","Salad","Chocolate cake"]
  const [order, setOrder] = useState(0);

  function orderOne() {
    setOrder(order + 1);
  }
  return (
    // orderType.map(order =>{
    //    return (

    <li>
      Salad: {order}
      <RestaurantButton handler={orderOne} message="Salad" />
    </li>
  );
  // })
};
export default OrderSalad;
