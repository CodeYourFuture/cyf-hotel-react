import React, {useState} from "react";
import RestaurantButton from "./RestaurantButton";

const Order = (props) => {
    const [orders, setCount] = useState(0);
    const orderOne = () => {
      setCount(orders+1);
    }
    return (
            <li className="order-wrapper">
                 <div> {props.orderType}:</div> <div className="order-button">{orders} <RestaurantButton orderOne = {orderOne}/> </div>
            </li>
    )
}

export default Order