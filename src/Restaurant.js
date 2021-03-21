import React from "react";
import Orders from "./Orders";

const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Orders orderType="Meat Feast Pizza" />
        <Orders orderType="Ceaser Salad" />
        <Orders orderType="Raspberry Cheesecake" />
      </ul>
    </div>
  );
};

export default Restaurant;
