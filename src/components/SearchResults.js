import React from "react";
import FakeBookings from "../data/fakeBookings.json";
import moment from "moment";
// for (var i = 0; i < FakeBookings.length; i++);
class TableRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: { backgroundColor: "" }
    };
  }

  onClicked = () => {
    this.setState({ style: { backgroundColor: "skyblue" } });
  };

  render() {
    return (
      <tr
        className={this.props.item.id}
        key={this.props.item.id}
        onClick={this.onClicked}
        style={this.state.style}
      >
        <td>{this.props.item.id}</td>
        <td>{this.props.item.title}</td>
        <td>{this.props.item.firstName}</td>
        <td>{this.props.item.surname}</td>
        <td>{this.props.item.email}</td>
        <td>{this.props.item.roomId}</td>
        <td>{this.props.item.checkInDate}</td>
        <td>{this.props.item.checkOutDate}</td>
        <td>
          {moment(this.props.item.checkOutDate).diff(
            moment(this.props.item.checkInDate),
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
      style: { backgroundColor: "" },
      rowId: FakeBookings.map(item => item.id)
    };
  }
  onClicking = () => {
    this.setState({ style: { backgroundColor: "skyblue" } });
  };
  render() {
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
        <tbody>
          {this.state.fakeBookingsList.map(item => (
            <TableRow item={item} />
            // <tr
            //   className={item.id}
            //   key={item.id}
            //   onClick={this.onClicking}
            //   style={this.state.style}
            // >
            //   <td>{item.id} </td>
            //   <td>{item.title}</td>
            //   <td>{item.firstName}</td>
            //   <td>{item.surname}</td>
            //   <td>{item.email}</td>
            //   <td>{item.roomId}</td>
            //   <td>{item.checkInDate}</td>
            //   <td>{item.checkOutDate}</td>
            //   <td>
            //     {moment(item.checkOutDate).diff(
            //       moment(item.checkInDate),
            //       "days"
            //     )}
            //   </td>
            // </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default SearcResults;
