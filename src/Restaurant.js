import React, {Component} from "react";
import Orders from "./Orders";
class Restaurant extends Component{
  
 

  
  render() {
   
    return (
      <ul>
      <Orders orderType= "pizza"/>
      <Orders orderType="salat" />
      </ul>
    );


  };

}

export default Restaurant;
