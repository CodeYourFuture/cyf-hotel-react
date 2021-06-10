import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton"

function Orders({ orderType }) {
    const [orders, setOrders] = useState(0);
    const orderOne = () => setOrders(orders + 1)

    return (
        <div>
            <li>
                {orderType}: {orders} <RestaurantButton orderOne={orderOne} />
            </li>
        </div>
    )
}

export default Orders
