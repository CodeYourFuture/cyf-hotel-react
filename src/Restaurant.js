import React, { useState } from "react";
// import RestaurantButton from "./RestaurantButton.js";
import Order from "./Order.js";

const Restaurant = () => {
  return (
    <div className="Restaurant-orders">
      <h3>Restaurant Menu</h3>
      <ul>
        <Order orderType="Black Coffee" />
        <br></br>
        <Order orderType="Cream Tea" />
        <br></br>
        <Order orderType="Hot Chocolate" />
        <br></br>
        <Order orderType="Banana pie" />
        <br></br>
        <Order orderType="Chocolate Cake" />
        <br></br>
        <Order orderType="Bechemel Pizza" />
        <br></br>
        <Order orderType="Nicoise Salads" />
        <br></br>
        <Order orderType="Salmon gravalax" />
        <br></br>
        <Order orderType="Poached eggs" />
        <br></br>
        <Order orderType="Garlic Spinach" />
        <br></br>
        <Order orderType="Blackpepper Tuna" />
        <br></br>
        <Order orderType="Noodle Soup" />
        <br></br>
      </ul>
    </div>
  );
};

export default Restaurant;
