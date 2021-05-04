import React from "react";

import Restaurant  from "./Restaurant"


function RestaurantButton(props) {
     
  
    return ( <button className="btn btn-primary" onClick={props.order} >Add</button>
				

        
    )
}

export default RestaurantButton
