import React from "react";
import FakeBookings from "../data/fakeBookings.json";
import moment from "moment";
for (var i = 0; i < FakeBookings.length; i++);
class TableRow extends React.Component {
  render() {
    return (
      <tr
        className={this.props.i.id}
        key={this.props.i.id}
        onClick={this.props.clickedToChangeColor}
        style={this.props.givinStyle}
      >
        <td>{this.props.i.id}</td>
        <td>{this.props.i.title}</td>
        <td>{this.props.i.firstName}</td>
        <td>{this.props.i.surname}</td>
        <td>{this.props.i.email}</td>
        <td>{this.props.i.roomId}</td>
        <td>{this.props.i.checkInDate}</td>
        <td>{this.props.i.checkOutDate}</td>
        <td>
          {moment(this.props.i.checkOutDate).diff(
            moment(this.props.i.checkInDate),
            "days"
          )}
        </td>
      </tr>
    );
  }
}
class SearcResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fakeBookingsList: FakeBookings,
      style: { backgroundColor: "skyblue" }
    };
  }

  render() {
    console.log(this.state.id);
    const tableRow = this.state.fakeBookingsList.map(item => (
      <TableRow
        className="table-row"
        givinStyle={this.state.style}
        clickedToChangeColor={this.onClicking}
        key={item.id}
        i={item}
      />
    ));
    return (
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">FirstName</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">RoomID</th>
            <th scope="col">CheckInDate</th>
            <th scope="col">checkOutDate</th>
            <th scope="col">Number Of Days</th>
          </tr>
        </thead>
        <tbody>{tableRow}</tbody>
      </table>
    );
  }
}

export default SearcResults;
