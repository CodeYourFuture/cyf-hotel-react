import React, { useState } from "react";
import Order from "./Order.js";

const Restaurant = () => {
  return (
    <div className="restaurant-orders">
      <h3>Restaurant Menu</h3>
      <div className="menu">
        <ul className="mylist">
          <li className="item">
            <Order orderType="Black Coffee" />
          </li>
          <li className="item">
            <Order orderType="Cream Tea" />
          </li>
          <li className="item">
            <Order orderType="Hot Chocolate" />
          </li>
          <li className="item">
            <Order orderType="Banana pie" />
          </li>
          <li className="item">
            <Order orderType="Chocolate Cake" />
          </li>
          <li className="item">
            <Order orderType="Bechemel Pizza" />
          </li>
          <li className="item">
            <Order orderType="Nicoise Salads" />
          </li>
          <li className="item">
            <Order orderType="Salmon gravalax" />
          </li>
          <li className="item">
            <Order orderType="Poached eggs" />
          </li>
          <li className="item">
            <Order orderType="Garlic Spinach" />
          </li>
          <li className="item">
            <Order orderType="Blackpepper Tuna" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Restaurant;

