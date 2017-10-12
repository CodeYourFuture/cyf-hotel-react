import React, { Component } from 'react';

class Button extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
       <button 
           className={this.props.classStyle}
           onClick={this.props.onClick}> 
           {this.props.searchById} 
       </button>
   )
  }
}

export default Button;

