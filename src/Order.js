import React, {useState} from "react";
import RestaurantButton from "./RestaurantButton";

const Order = (props) => {
    const [orders, setCount] = useState(0);
    const orderOne = () => {
      setCount(orders+1);
    }
    return (
            <li className="order-wrapper">
                 {props.orderType}: <div>{orders}</div> <RestaurantButton orderOne = {orderOne}/>
            </li>
    )
}

export default Order