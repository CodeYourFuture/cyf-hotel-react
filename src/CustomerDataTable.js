import React, { Component } from "react";
import moment from "moment";


class CustomerDataTable extends Component {

constructor(props) {
  super(props);
  this.state = {
    rowId: 0
  }
}


toggleHighlightedRow = (e) => {

  let row = e.target.parentNode.id
  this.setState(prevState => ({
    rowId: row
  }));
}


calculateStayDuration = (checkIn, checkOut) => {
  return moment(checkOut).diff(moment(checkIn), "days");
}




  render() {
    return (
      <tbody>

        {this.props.results.map(res => {
          return (

         <tr onClick={this.toggleHighlightedRow} key={res.id} id={res.id} className={this.state.rowId == res.id ? "bg-info": ""}>
              <th scope="row" key={res.id}>
                {res.id}
              </th>
              <td>{res.title}</td>
              <td>{res.firstName}</td>
              <td>{res.surname}</td>
              <td>{res.email}</td>
              <td>{res.roomId}</td>
              <td>{res.checkInDate}</td>
              <td>{res.checkOutDate}</td>
              <td>
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
