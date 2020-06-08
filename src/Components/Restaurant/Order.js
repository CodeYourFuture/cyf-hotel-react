import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = ({ orderType }) => {
  const [order, setOrder] = useState(0);

  const orderOne = () => {
    setOrder(order + 1);
  };
  return (
    <div className="orders">
      <div>
        <li>
          {orderType}: {order}
        </li>
      </div>

      <div>
        <RestaurantButton onclick={orderOne} />
      </div>
    </div>
  );
};
export default Order;
