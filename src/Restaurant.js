import React, { useState } from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          {/* <button className="btn btn-primary" onClick={incraseOrder}>
            Add
          </button> */}
          {/* <RestaurantButton addOrder={incraseOrder} /> */}
          <Order orderType={"pizza"} />
          <Order orderType={"salad"} />
          <Order orderType={"chocolate cake"} />
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
