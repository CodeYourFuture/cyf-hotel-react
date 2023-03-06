import React,{useState} from "react";
import RestaurantButton from "./RestaurantButton";

const Order = (props)=>{
  const [orders, setOrders] = useState(0);
  const orderOne = ()=>{
    setOrders(prevPizza => prevPizza+1)
  }
    return (
      <>
        <li style={{ padding: "20px" }}>
          {props.orderType}: {orders} <RestaurantButton handleClick={orderOne} />
        </li>
      </>
    );
};
export default Order;