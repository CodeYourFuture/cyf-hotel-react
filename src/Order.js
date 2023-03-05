import react ,{useState} from "react"
import RestaurantButton from "./RestaurantButton"


const Order = (props) => {
const [Orders,setOrder]= useState(0);

function orderOne(){
setOrder(Orders +1)

}
return(
<li>
{props.orderType}: {Orders} 
<RestaurantButton func={orderOne}/>
</li>
)
};
export default Order;
