import react, { useState } from "react";
import Restaurant from "./Restaurant";
import Orders from "./Order";
const RestaurantButton = props=>{




return(
<div> 
<button onClick={props.func} className="btn btn-primary">{props.button}</button>
</div>
) 

};
export default RestaurantButton;


