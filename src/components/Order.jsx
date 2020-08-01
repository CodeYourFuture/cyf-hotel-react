import React, { useState } from "react";
import "./Order";
const Order = props => {
  const [foodItems, countFoodItems] = useState(0);
  const incrementCounter = () => {
    countFoodItems(foodItems + 1);
  };
  return (
    <div>
      {props.orderType}:{foodItems}
      <button style={{ marginLeft: "30px" }} onClick={incrementCounter}>
        Add
      </button>
    </div>
  );
};

export default Order;
