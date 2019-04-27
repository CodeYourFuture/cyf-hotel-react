import React, { Component } from "react";
import Orders from "./Orders";

class Restaurant extends Component {
  constructor (props){
  super(props)
  this.state = {
    orders: 0
  }}

  // addOrder = () => {
  //   console.log("order added")
  //   this.setState(currentState => {
  //     return{
  //       orders: currentState.orders + 1

  //     }
  //   })
  // }
  render(){
  // const pizzas = 0;
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Orders  orderType= {"Pizza"}/>
        <br></br>
        <Orders  orderType= {"Salads"}/>
      </ul>
    </div>
  );
}};

export default Restaurant
