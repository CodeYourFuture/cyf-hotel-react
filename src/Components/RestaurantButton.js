import React from "react";

function RestaurantButton({orderOne}){
    
return (
  <button onClick={orderOne} className="btn btn-primary">
    Add
  </button>
);
}

 export default RestaurantButton