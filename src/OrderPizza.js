// import React ,{ useState } from "react"

// import RestaurantButton from "./RestaurantButton"

// import OrderOne from "./OrderOne"

// const OrderPizza=()  =>  {
//   //const types=["Pizza","Salad","Chocolate cake"]
//   const [orderP, setOrderP] = useState(0);
//   const [orderS, setOrderS] = useState(0);
//   const [orderC, setOrderC] = useState(0);

//           function orderOne(orderType){
//       if (orderType=="Pizza")
//         setOrderP(orderP + 1);
//         else if (orderType=="Salad")
//         setOrderS(orderS + 1);
//         else
//         setOrderC(orderC + 1);
//           }
//     return(
//       // orderType.map(order =>{
//       //    return (
//         <ul>
//           <li>
//           Pizza: {orderP}
//           <RestaurantButton handler ={function(){{orderOne("Pizza")} } }message="Pizza"/>
//         </li>

//       <li>
//         Salad: {orderS}
//         <RestaurantButton handler ={function(){{orderOne("Salad")} } } message="Salad"/>
//       </li>
//       <li>
//       Chocolate cake: {orderC}
//         <RestaurantButton handler ={function(){{orderOne("chocolate")} } }message="Chocolate Cake"/>
//       </li>
//       </ul>
//     )
//     // })
// }
//  export default OrderPizza;
import React, { useState } from "react";

import RestaurantButton from "./RestaurantButton";

const OrderPizza = () => {
  //const types=["Pizza","Salad","Chocolate cake"]
  const [order, setOrder] = useState(0);

  function orderOne() {
    setOrder(order + 1);
  }
  return (
    // orderType.map(order =>{
    //    return (

    <li>
      Pizza: {order}
      <RestaurantButton handler={orderOne} message="Pizza" />
    </li>
  );
  // })
};
export default OrderPizza;
