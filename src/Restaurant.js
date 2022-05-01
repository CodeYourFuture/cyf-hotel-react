import React from "react";
import Order from "./Order";

const Restaurant = props => {
  return (
    <div>
      <h3 className="restaurant-order-header">Restaurant Orders</h3>
      <div className="ul-container">
        <ul className="restaurant-ul">
          <div>
            <Order orderType={"Mozzarella Pizza"} />
            <Order orderType={"Caesar Salad"} />
            <Order orderType={"Barbecue Chicken"} />
          </div>
          <div>
            <Order orderType={"Chocolate Cake"} />
            <Order orderType={"Waffle and Ice Cream"} />
            <Order orderType={"Victoria Sponge Cake"} />
          </div>
          <div>
            <Order orderType={"Avocado on Toast"} />
            <Order orderType={"Muesli and Greek Yogurt"} />
            <Order orderType={"Scramble Eggs on Toast"} />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Restaurant;
