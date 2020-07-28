import React from "react";
import Order from "./Order";

const Restaurant = () => {
  const orderList = ["Pizzas", "Salads", "Chocolate Cake"];
  return (
    <div>
      <h3 className="restaurant-title">Restaurant Order</h3>
      {orderList.map(item => {
        return <Order orderType={item} />;
      })}
    </div>
  );
};

export default Restaurant;
