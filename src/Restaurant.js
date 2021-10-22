import React from "react";
import Order from "../src/components/Orders";

const Restaurant = () => {
  return (
    <div className="restaurant">
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType={"pizza"} />
        <Order orderType={"salad"} />
        <Order orderType={"chocolate cake"} />
      </ul>
    </div>
  );
};

export default Restaurant;
