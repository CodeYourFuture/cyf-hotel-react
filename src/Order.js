import React ,{useState} from "react"
import RestaurantButton from "./RestaurantButton"


const Order = (props) => {
const [Orders,setOrder]= useState(0);

function orderOne(){
setOrder((preOrders)=>preOrders +1)

}
function orderLess (){
setOrder((preOrders)=> preOrders -1)

}

return(
<li>
{props.orderType}: {Orders} 
<RestaurantButton func={orderOne} button={"Add"}/>
<RestaurantButton func={orderLess} button={"remove"}/>

</li>
)
};

export default Order;
