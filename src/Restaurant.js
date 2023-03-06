import React, {useState} from "react";
import RestaurantButton from "./RestaurantButton";
import Order from "./Order";

const restStyle = {marginLeft:"700px", marginTop:"25px",color:"purple",}

const Restaurant = () => {
//   const [orders, setOrders] = useState(0);
//   const orderOne = ()=>{
//     setOrders(prevPizza => prevPizza+1)
//   }
//  const pizzas = 0;
  return (
    <div style={restStyle}>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType={"Pizzas"} />
        <Order orderType={"Salads"} />
        <Order orderType={"Chocolate cake"} />
        {/* <li style={{padding:"20px"}}>
          Pizzas: {orders} <RestaurantButton handleClick={orderOne} />
          {/* Pizzas: {orders} <button className="btn btn-primary" onClick={orderOne}>Add</button> */}
      </ul>
    </div>
  );
};

export default Restaurant;
