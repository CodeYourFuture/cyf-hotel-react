import React, { Component } from "react";

class OrderButton extends Component {

  render(){
  return( 
      <button onClick={this.props.clickhandle} className="btn btn-primary">Add</button>
      ) 
  }
}

export default OrderButton
