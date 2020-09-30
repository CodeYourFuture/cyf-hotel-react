import Order from "./Order";
import React from "react";

const Restaurant = () => {
  //  const [order,setOrder]=useState(0);
  //  function orderOne(){
  //    setOrder(order+1);
  //  }

  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType="Pizzas" />
        <Order orderType="Salads" />
        <Order orderType="Chocolate cake" />
      </ul>
    </div>
  );
};

export default Restaurant;
