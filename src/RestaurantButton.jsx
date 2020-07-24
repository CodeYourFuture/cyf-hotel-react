import React, { useState } from "react";

const RestaurantButton = props => {
  const [orders, countOrder] = useState(0);
  const incrementOrders = () => {
    countOrder(orders + 1);
  };
  return (
    <div
      style={{
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        flexWrap: "wrap"
      }}
    >
      TotalOrders:{orders}
      <button onClick={incrementOrders}>Increment Orders</button>
    </div>
  );
};

export default RestaurantButton;
