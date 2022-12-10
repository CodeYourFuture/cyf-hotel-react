import React from "react";
import Order from "./Order";

const Restaurant = ({ orderType }) => {
  // const [orders,setOrders] =useState(0);
  // function orderOne(){
  //   setOrders(order=>orders +1);
  // }
  return (
    <div className="restaurant-order">
      <h4>Restaurant Orders</h4>
      <ul>
        <Order orderType="Pizzas" />
        <Order orderType="Salads" />
        <Order orderType="Chocolate cake" />
      </ul>
      {/* <ul>
        <li> 
          Pizzas : {orders} <RestaurantButton orderOne={orderOne}/> */}
      {/* Pizzas: {orders} <button className="btn btn-primary" onClick={orderOne}>Add</button> */}
      {/* </li>
      </ul> */}
    </div>
  );
};

export default Restaurant;
