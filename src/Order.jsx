import React ,{ useState }from "react";
import RestaurantButton from "./RestaurantButton.jsx";

const Order = () =>{
  const [orders,setOrders]= useState(0);
  function OrderOne() {
    return setOrders(orders+1);
    }
    return (<li className="removemarker">
          Pizzas:  {orders}  
          <RestaurantButton OrderOne = {OrderOne}  />
        </li>);
    
}

export default Order;