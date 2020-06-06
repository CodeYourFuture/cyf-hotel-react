import React, { useState } from "react"
import RestaurantButton from "./RestaurantButton"

function Order(props) {
    const [orders, setOrders] = useState(0)
    function orderOne() {
        setOrders(orders + 1);
    }
    const orderType = "Pizza"

    return (
        <ul>
            <li>
                {props.orderType}: {orders} <RestaurantButton orderOne={orderOne} />

            </li>
        </ul>

    )
}
export default Order