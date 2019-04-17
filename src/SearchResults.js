import React, { Component } from "react";
import TableBody from "./TableBody";
import TableColumnHeadings from "./TableColumnHeadings";
import FakeBookings from './data/fakeBookings.json';

export default class SearchResults extends Component{
  render() {
return(
<div className= "tableContent">
   <table className= "table">
   <TableColumnHeadings />
   <TableBody searchOutput = {FakeBookings}/>
</table>
</div>)}}
