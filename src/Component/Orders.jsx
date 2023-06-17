import { useState } from "react";
import react  from "react";
import RestaurantButton from "./RestaurantButton";

const Orders = props => {
    const [pizzaCount, setPizzaCount] = useState(0)
    const [count, setCount] = useState(0)

    function handleCountMinus() {
        setCount(count - 1)
    }
    function handleCountPlus() {
        setCount(count + 1)
    }

    function handlePizzaCount() {
        if (count < 0) {
            setPizzaCount(0)
        } else {
            setPizzaCount(count)
        }
    }

    return (
        <>
        <div>
            <ul>
                <li>
                    <div>
                        <div>
                            {props.food}: {pizzaCount}
                        </div>
                        <div>
                            <button class="btn btn-outline-info" onClick={handleCountMinus} >-</button>
                            <h5>{count}</h5>
                            <button class="btn btn-outline-info" onClick={handleCountPlus} >+</button>
                        </div>
                        <RestaurantButton handlePizzaCount={handlePizzaCount}/>
                    </div>
                </li>
            </ul>
        </div>
        </>
    )
}


export default Orders;