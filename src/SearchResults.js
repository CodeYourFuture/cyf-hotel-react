import React from "react";
var moment = require("moment");

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableRow: Array(this.props.results.length).fill(null),
      isSelected: Array(this.props.results.length).fill(false)
    };
  }

  highlightRow(index) {
    const isSelected = this.state.isSelected.slice();
    const tableRow = this.state.tableRow.slice();

    if (!isSelected[index]) {
      isSelected[index] = true;
    } else {
      isSelected[index] = false;
    }

    this.setState({ isSelected: isSelected });
    tableRow[index] = isSelected[index] ? "highlighted" : "";
    this.setState({ tableRow: tableRow });
  }

  render() {
    const bookingList = this.props.results.map((bookingObj, index) => {
      return (
        <tr
          className={this.state.tableRow[index]}
          onClick={() => this.highlightRow(index)}
        >
          <td>{bookingObj.id}</td>
          <td>{bookingObj.title}</td>
          <td>{bookingObj.firstName}</td>
          <td>{bookingObj.surname}</td>
          <td>{bookingObj.email}</td>
          <td>{bookingObj.roomId}</td>
          <td>{bookingObj.checkInDate}</td>
          <td>{bookingObj.checkOutDate}</td>
          <td>
            {moment(bookingObj.checkOutDate).diff(
              bookingObj.checkInDate,
              "days"
            )}
          </td>
        </tr>
      );
    });

    return (
      <table className="table table-striped table-bordered table-hover table-sm text-center">
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Room ID</th>
            <th scope="col">Check IN</th>
            <th scope="col">Check Out</th>
            <th scope="col">Day(s) Staying</th>
          </tr>
        </thead>
        <tbody>{bookingList}</tbody>
      </table>
    );
  }
}

export default SearchResults;
