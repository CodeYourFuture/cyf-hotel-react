import React, { useState } from "react";

import RestaurantButton from "./RestaurantButton";

const OrderChocolateCake = () => {
  //const types=["Pizza","Salad","Chocolate cake"]
  const [order, setOrder] = useState(0);

  function orderOne() {
    setOrder(order + 1);
  }
  return (
    // orderType.map(order =>{
    //    return (

    <li>
      ChocolateCake: {order}
      <RestaurantButton handler={orderOne} message="ChocolateCake" />
    </li>
  );
  // })
};
export default OrderChocolateCake;
