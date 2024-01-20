import React, { useState } from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div className="menue">
      <h3 id="menue-p">Restaurant Orders</h3>
      <ul>
        <li>
          <Order orderType={"pizza"} />
          <Order orderType={"salad"} />
          <Order orderType={"cake"} />
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
