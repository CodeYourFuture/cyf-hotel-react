import React, { Component } from "react";

export default class ResultTableHeaders extends Component{
  render(){
    return (this.props.resultHeading.map((header,i) =>{
      //since Id column is not displayed in the resulting table avoid it
      if(header !== 'id'){
        return <th key = {i} 
                  onClick ={this.props.onClick}
                  id = {header} >
                  {header.charAt(0).toUpperCase() + header.slice(1)} {/*capitalize the heading*/}
               </th>
      }
    }))
  }
}

