import React, { useState } from "react";
import RestaurantButton from "./RestauranButton";

const Order = ({ orderType }) => {
  const [count, setCount] = useState(0);

  const addOrder = () => {
    setCount(count + 1);
  };

  const removeOrder = () => {
    setCount(count - 1);
  };

  const setToZero = () => {
    setCount((0));
  }

  return (
    <div>
      <ul>
        <li>
          {orderType} {count}
          <RestaurantButton handleClick={addOrder}/>
        </li>
          <RestaurantButton handleClick={setToZero} text="-" />
        
      </ul>
    </div>
  );
};

export default Order;
