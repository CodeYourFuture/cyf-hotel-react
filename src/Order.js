import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";
// import OrderCalculation from "./Utilities/OrderCalculation/"

const Order = ({ orderType }) => {
  const [count, setCount] = useState(0);

  const addOrder = () => {
    setCount(count + 1);
  };


//   const removeOrder = () => {
//     setCount(count - 1);
//   }

const setToZero = () => {
  setCount(0);
};

  return (
    <div>
      <ul>
        <li>
          {orderType} {count}
          <br></br>
          <RestaurantButton handleClick={addOrder} handleClick1={setToZero} />
        </li>
      </ul>
    </div>
  );
}


export default Order;
