
import React, {useState} from "react";
// import RestaurantButton from "./RestaurantButton";
import Order from "./Order";


const Restaurant = () => {
  // //const pizzas = 0;
  // const [orders, setOrders] = useState(0)
  // const orderOne = () => {
  //   setOrders(orders+1)
  // }
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        {/* <li>
          Pizzas: {orders} <button onClick= {orderOne} className="btn btn-primary">Add</button>
        Pizzas: {orders}<RestaurantButton onClick= {orderOne}/>
        </li> */}
        <Order orderType = "Salad"/>
        <Order orderType = "Pizzas"/>
        <Order orderType = "Chocolate Cake"/>
      </ul>
    </div>
  );
};

export default Restaurant;
