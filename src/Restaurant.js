import React, { Component } from "react";
import Order from "./components/Order";

export default class Restaurant extends Component {
   render() {
      return (
         <div>
            <div>
               <h3>Restaurant Orders</h3>
               <ul>
                  <Order orderType="Pizzas" />
                  <Order orderType="Salads" />
               </ul>
            </div>
         </div>
      );
   }
}
