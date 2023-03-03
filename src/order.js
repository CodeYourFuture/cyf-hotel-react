import React,{useState} from "react";
import RestaurantBtn from "./resturantBtn";
const Order = (props)=>{
    const [Orders,setOrder] = useState(0);
    function OrderOne(){
        setOrder(Orders+1)
    }
    return (
        <li>
            {props.orderType}:{Orders} <RestaurantBtn func={OrderOne}/>
        </li> 
        
    );
}
  export default Order;