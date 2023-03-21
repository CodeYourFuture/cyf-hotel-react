import React, { useState } from "react";
// import RestaurantButton from "./RestaurantButton.js";
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
          <li className="item">git ad
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
          {/* <li className="item">
            <Order orderType="Noodle Soup" />
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Restaurant;

// <li class="item">Black Coffee</li>
// <li class="item">Cream Tea</li>
// <li class="item">Hot Chocolate</li>
// <li class="item">Banana Pie</li>
// <li class="item">Chocolate Cake</li>
// <li class="item">Bechamel Pizza</li>
// <li class="item">Nicoise Salad</li>
// <li class="item">Salmon Gravalax</li>
// <li class="item">Poached Eggs</li>
// <li class="item">Garlic Spinach</li>
// <li class="item">Black Pepper Tuna</li>
// <li class="item">Noodle Soup</li>
