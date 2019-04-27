import React, { Component } from "react";
import moment from "moment";
import TableRow from "./TableRow"


class CustomerDataTable extends Component {

calculateStayDuration = (checkIn, checkOut) => {
  return moment(checkOut).diff(moment(checkIn), "days");
}


  render() {
    return (
      <tbody>

        {this.props.results.map(res => {
          return (
            <TableRow
            id={res.id}
            title={res.title}
            firstName={res.firstName}
            surname={res.surname}
            email={res.email}
            roomId={res.roomId}
            checkInDate={res.checkInDate}
            checkOutDate={res.checkOutDate}
            nights={this.calculateStayDuration(res.checkInDate, res.checkOutDate)}


             />

          );
        })}
      </tbody>
    );

}

}

export default CustomerDataTable;
