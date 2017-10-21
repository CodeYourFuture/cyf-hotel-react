import React, {Component} from 'react';
import moment from 'moment';


const TableRow = function(props) {
return(
 <thead> 
<tr>
  <td onClick={() =>props.onSort('title')}></td>
  <td onClick={() =>props.onSort('firstName')}></td>
  <td onClick={() =>props.onSort('surname')}></td>
  <td onClick={() =>props.onSort('email')}></td>
  <td onClick={() =>props.onSort('roomId')}></td>
  <td >checkInDate</td>
  <td >check out date</td>
  <td >Days staying</td>
</tr>  
</thead>
) 


class ResultRow extends Component {
  constructor(props) {
    super(props)
    this.state = { selected: false}
  }

handleCheck =() => {
  this.setState({ selected: !this.state.selected })
}

  render() { 
    return(
   <tr >
      <td ><input type = "checkbox" checked={this.state.checked} onChange={this.handleCheck} /></td>
      <td >{this.props.title}</td>
      <td >{this.props.firstName}</td>
      <td >{this.props.surname}</td>
      <td >{this.props.email}</td>
      <td >{this.props.roomId}</td>
      <td >{this.props.checkInDate}</td>
      <td >{this.props.checkOutDate}</td>
      <td >{moment(this.props.checkOutDate).diff(this.props.checkInDate, 'days')}</td>
    </tr>
  
    )
  }
}
}
export default TableRow;