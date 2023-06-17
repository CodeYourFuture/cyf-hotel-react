import React, { useState } from "react";
import Orders from "../Component/Orders";
const Restaurant = () => {


  const pizzas = 0;
  return (
    <div className="container">
      <h3>Restaurant Orders</h3>
     <Orders food={"pizza"} />
     <Orders food={"burger"} />
     <Orders food={"Cake"}/>
    </div>
  );
};

export default Restaurant;
