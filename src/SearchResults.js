import React from "react";
var moment = require("moment");

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableRow: Array(this.props.bookingInfoResult.length).fill(null),
      isSelected: Array(this.props.bookingInfoResult.length).fill(false)
      // bookingList: []
      // isSelected: false,
      // rowStatus: null
    };
  }

  highlightRow(index) {
    // this.setState({ isSelected: !this.state.isSelected });
    // this.setState({ rowStatus: this.state.isSelected ? "highlighted" : null });
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
    let bookingList;

    if (this.props.bookingInfoResult.length > 0) {
      bookingList = (
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
          <tbody>
            {this.props.bookingInfoResult.map((bookingObj, index) => {
              return (
                <tr
                  className={this.state.tableRow[index]}
                  onClick={() => this.highlightRow(index)}
                  key={bookingObj.id}
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
            })}
          </tbody>
        </table>
      );
    } else {
      bookingList = null;
    }

    return bookingList;
  }
}

export default SearchResults;
