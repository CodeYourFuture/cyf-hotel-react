import React from "react";
import Order from "./Order.jsx";

const Restaurant = () => {
   return (
    <div className="footer">
      <h3>Restaurant Orders</h3>
      <ul>
        <Order />
      </ul>
    </div>
  );
};

export default Restaurant;
