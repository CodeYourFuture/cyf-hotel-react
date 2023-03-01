import React, {useState} from "react";

const Order = () => {
    const [orders, setCount] = useState(0);
    const orderOne = () => {
      setCount(orders+1);
    }
    return (
        <li>
             Pizzas: {orders} <button onClick = {orderOne} className="btn btn-primary">Add</button>
         </li>
    )
}

export default Order