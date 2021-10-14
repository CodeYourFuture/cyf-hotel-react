import React from "react";
import Order from "./Order";

const Restaurant = () => {
  const orderTypes = ["Pizzas", "Salads", "Choclate Cake", "Chips"];
  return (
    <div>
      <h3>Restaurant Orders</h3>
      {orderTypes.map(orderType => (
        <Order orderType={orderType} />
      ))}
      {/* <Order orderType={"Pizzas"} />
      <Order orderType={"Salads"} />
      <Order orderType={"Choclate Cake"} /> */}
    </div>
  );
};

export default Restaurant;
