import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";


const Order = ({orderType}) => {
    const [order, setOder] = useState(0);

    const orderOne = () => {
        setOder(order + 1);
    };
    
    return (
        <div>
            <ul>
                <li>
                {orderType} {order} <RestaurantButton handleClick={orderOne}/>
                </li>
            </ul>
        </div>
    );
}

export default Order;