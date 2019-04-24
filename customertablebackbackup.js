//Not sure if the most elegant solution. Lots of non-DRY stuff to get around prop key errors.
import React, { Component } from "react";
import moment from "moment";


class CustomerDataTable extends Component {

constructor(props) {
  super(props);
  this.state = {
    class: 'bg-info',
    rowSelected: false,
    selectedRow: null
  };
}


// checkSelectedRow(){
//   if(this.state.selectedRow && this.state.selectedRow){
//     return this.state.class;
// }


toggleRow = (e) => {
  let parentNode = e.target.parentNode.id;
  console.log(this.state.rowSelected)
  console.log(this.state.selectedRow)
  this.setState(prevState => ({
    rowSelected: !prevState.rowSelected,
    selectedRow: parentNode
  }));
}



calculateStayDuration = (checkIn, checkOut) => {
  return moment(checkOut).diff(moment(checkIn), "days");
}



// highlightSelectedRow = (e) => {
//   this.toggleRow();
//   console.log(this.state.rowSelected)
//
//   let tableRow = e.target.parentNode
//   if(this.state.rowSelected){
//     tableRow.className = this.state.class;
//   }else{
//     tableRow.classList.remove(this.state.class);
//   }
//
// }

  render() {
    return (
      <tbody>

        {this.props.results.map((res, index) => {
          return (
         <tr onClick={this.toggleRow} key={`tr${index}`} id={`${index}`}>
              <th scope="row" key={res.id}>
                {res.id}
              </th>
              <td key={res.title}>{res.title}</td>
              <td key={res.firstName}>{res.firstName}</td>
              <td key={res.surname}>{res.surname}</td>
              <td key={res.email}>{res.email}</td>
              <td key={res.roomId}>{res.roomId}</td>
              <td key={res.checkInDate}>{res.checkInDate}</td>
              <td key={res.checkOutDate}>{res.checkOutDate}</td>
              <td key={"nights"}>
                {this.calculateStayDuration(res.checkInDate, res.checkOutDate)}
              </td>
            </tr>
          );
        })}
      </tbody>
    );

}

}

export default CustomerDataTable;
