import React from "react";

export default function RestaurantButton(props) {
   return (
      <div>
         <button onClick={props.addOrder} className="btn btn-primary">
            Add
         </button>
      </div>
   );
}
