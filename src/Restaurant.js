import React, {useState} from "react";
import RestaurantButtin from "./RestaurantButton";
import Order from "./Order";







const Restaurant = (props) => {
  
  const  [orders, setOrders] = useState(0);
  const pizzas = 0;
  function orderOne() {
    setOrders(orders+ 1);
 
  }
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
        Pizzas: {orders} <button onClick={orderOne} className="btn btn-primary">Add</button>
        <ul>
        <Order />
        <Order orderType={"Pizzas"} />
        <Order orderType={"Salads"} />
        <Order orderType={"Chocolate cake"} />
      </ul>
  
        
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
