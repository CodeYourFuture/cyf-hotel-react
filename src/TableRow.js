import React, { Component } from "react";

import DaysCalculator from "./DaysCalculator";

// var moment = require('moment');
// moment().format();


class TableRow extends Component {
  constructor(props){
    super(props)
  this.state = {
    selected: false
  }}

  clickHandle = ()=> {
    this.setState(currentState => {
      return{
      selected: !currentState.selected}})
  }
  
  render() {
    let colourChanger = ""
    if (this.state.selected === true){
colourChanger = "changeColour"
    }
const info = this.props.rowInfo;
  
    return(
    <tr className={colourChanger} onClick={this.clickHandle}>
     <th scope= "row"> {info.id}</th>
       <td>{info.title}</td>
       <td>{info.firstName}</td>
       <td>{info.surname}</td>
       <td>{info.email}</td>
       <td>{info.roomId}</td>
       <td>{info.checkInDate}</td>
       <td>{info.checkOutDate}</td>
       <td> <DaysCalculator dateout = {info.checkOutDate} datein = {info.checkInDate} /> </td>
       </tr>     
   
  )
  }}
export default TableRow;