import React from "react";
import Order from "./Order"

const restStyle = {marginLeft:"70px", marginTop:"25px",color:"purple",}

const Restaurant = () => {
  const pizzas = 0;
  return (
    <div style={restStyle}>
      <h3>Restaurant Orders</h3>
      <ul className="orderItems">


        <Order orderType="Pizzas" />
        <Order orderType="Salads" />
        <Order orderType="Chocolate Cake" />
      
      </ul>
    </div>

  );
};

export default Restaurant;
