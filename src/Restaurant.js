import React from "react";
import Order from "./Order";

const Restaurant = () => {
  const orderList = ["Pizzas", "Salads", "Chocolate Cake"];
  return (
    <div>
      <h3 className="restaurant-title">Restaurant Order</h3>
      {orderList.map((item, index) => {
        return <Order orderType={item} key={index} />;
      })}
    </div>
  );
};

export default Restaurant;
