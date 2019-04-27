import React, { Component } from "react";
import OrderButton from "./OrderButton";

class Orders extends Component {
  constructor (props){
  super(props)
  this.state = {
    orders: 0
  }}

  addOrder = () => {
    console.log("order added")
    this.setState(currentState => {
      return{
        orders: currentState.orders + 1

      }
    })
  }
  render(){
  return (
      
        <li>
          {this.props.orderType}: {this.state.orders} 
          <OrderButton clickhandle = {this.addOrder} />
        </li>
  );
}};

export default Orders
