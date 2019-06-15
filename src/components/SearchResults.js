import React from "react";
import moment from "moment";

export class TableRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      style: {}
    };
  }

  onClicked = () => {
    this.setState(() => {
      if (this.state.isClicked === false)
        return {
          isClicked: !this.state.isClicked,
          style: { backgroundColor: "skyblue" }
        };
      else {
        if (this.state.isClicked === true)
          return {
            isClicked: !this.state.isClicked,
            style: { backgroundColor: "" }
          };
      }
    });
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
export class SearcResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: { backgroundColor: "" },
      sortType: "",
      sortAscending: true
    };
  }
  onClicking = () => {
    this.setState({ style: { backgroundColor: "skyblue" } });
  };
  compareFunction = (a, b) => {
    if (a[this.state.sortType] > b[this.state.sortType]) return 1;
    if (a[this.state.sortType] < b[this.state.sortType]) return -1;
    return 0;
  };
  handleClickToSort = event => {
    let text = event.target.textContent;
    text = text.charAt(0).toLowerCase() + text.slice(1);
    this.setState({
      sortType: text,
      changeArowDirection: !this.state.changeArowDirection,
      sortAscending: !this.state.sortAscending
    });
  };
  render() {
    return (
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col" onClick={this.handleClickToSort}>
              FirstName
            </th>
            <th scope="col" onClick={this.handleClickToSort}>
              Surname
            </th>
            <th scope="col">Email</th>
            <th scope="col">RoomID</th>
            <th scope="col">CheckInDate</th>
            <th scope="col">checkOutDate</th>
            <th scope="col">Number Of Days</th>
          </tr>
        </thead>
        {/* to manage sorting way on clicking the tabple header */}
        {this.state.sortAscending ? (
          <tbody>
            {this.props.fakeBookingsList
              .sort(this.compareFunction)
              .map((item, index) => (
                <TableRow key={index} item={item} />
              ))}
          </tbody>
        ) : (
          <tbody>
            {this.props.fakeBookingsList
              .sort(this.compareFunction)
              .reverse()
              .map((item, index) => (
                <TableRow key={index} item={item} />
              ))}
          </tbody>
        )}
      </table>
    );
  }
}
