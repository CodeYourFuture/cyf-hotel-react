import React, { Component } from "react";

import TableRow from "./TableRow"
// var moment = require('moment');
// moment().format();


class TableBody extends Component {
  // constructor(props){
  //   super(props)
  // this.state = {
  //   selected: false
  // }}

  // clickHandle = ()=> {
  //   this.setState(currentState => {
  //     return{
  //     selected: !currentState.selected}})
  // }
  render() {
  
return(
<tbody>
     {this.props.searchOutput.map(rowInfo => {
  return( <TableRow rowInfo= {rowInfo} />)
    
    
         })}    
  </tbody>)
  }}
export default TableBody;