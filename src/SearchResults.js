import React, { Component } from "react";
import TableHeadings from "./TableHeadings";
import moment from "moment";
import TableRow from "./TableRow";

class SearchResults extends Component {
  calculateStayDuration = (checkIn, checkOut) => {
    return moment(checkOut).diff(moment(checkIn), "days");
  };

  render() {
    return (
      <div className="container">
        <table className="table">
          <TableHeadings
            headings={[
              "ID",
              "Title",
              "First Name",
              "Surname",
              "Email",
              "Room ID",
              "Check In Date",
              "Check Out Date",
              "Nights"
            ]}
          />
          <tbody>
            {this.props.results.map(res => {
              return (
                <TableRow
                  key={res.id}
                  id={res.id}
                  title={res.title}
                  firstName={res.firstName}
                  surname={res.surname}
                  email={res.email}
                  roomId={res.roomId}
                  checkInDate={res.checkInDate}
                  checkOutDate={res.checkOutDate}
                  nights={this.calculateStayDuration(
                    res.checkInDate,
                    res.checkOutDate
                  )}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default SearchResults;
