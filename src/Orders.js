import React, { Component } from "react";
 import RestaurantButton from "./RestaurantButton";

 class Orders extends Component{
     constructor(props) {
         super(props);
         this.state = { orders: 0 };
     }
     addOrder = () => {
         this.setState(previousState => {
             return { orders: previousState.orders + 1 };
         });
     };
     render(){
         return (
           <li>
             {this.props.orderType} {this.state.orders}
             <RestaurantButton
               handleClick={this.addOrder}
               text={"Add"}
             />
           </li>
         );
     }
 }
export default Orders;




















