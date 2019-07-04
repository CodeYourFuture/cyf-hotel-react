import React from "react";
import EditableRow from "./EditableRow";
import TableRow from "./TableRow";
export class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: { backgroundColor: "" },
      sortType: "",
      sortAscending: true,
      fakeBookingsList: props.fakeBookingsList,
      selectedEditRowId: this.props.selectedEditRowId
    };
  }
  editRow = id => {
    this.setState({
      selectedEditRowId: id
    });
  };

  saveRow = (
    id,
    title,
    firstName,
    surname,
    email,
    roomId,
    checkInDate,
    checkOutDate
  ) => {
    const newData = this.props.fakeBookingsList.filter(row => row.id !== id);
    const updatedRow = {
      id,
      title,
      firstName,
      surname,
      email,
      roomId,
      checkInDate,
      checkOutDate
    };
    newData.splice(id - 1, 0, updatedRow);

    this.setState({
      selectedEditRowId: null,
      fakeBookingsList: newData
    });
  };

  onClicking = () => {
    this.setState({ style: { backgroundColor: "skyblue" } });
  };
  compareFunction = (a, b) => {
    return this.state.sortAscending
      ? a[this.state.sortType] > b[this.state.sortType]
        ? 1
        : -1
      : a[this.state.sortType] > b[this.state.sortType]
      ? -1
      : 1;
  };
  handleClickToSort = event => {
    let text = event.target.textContent;
    text = text.charAt(0).toLowerCase() + text.slice(1);
    this.setState({
      sortType: text,
      sortAscending: !this.state.sortAscending
    });
  };
  deleteEntry = entry => {
    console.log("Delete");
    this.setState({
      fakeBookingsList: this.state.fakeBookingsList.filter(
        user => user !== entry
      )
    });
  };
  render() {
    return (
      <table className="table table-striped table-dark">
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
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody className="tablebody">
          {this.state.fakeBookingsList
            .map((item, index) => {
              if (item.id === this.state.selectedEditRowId) {
                return (
                  <EditableRow
                    key={index}
                    id={item.id}
                    title={item.title}
                    firstName={item.firstName}
                    surname={item.surname}
                    email={item.email}
                    roomId={item.roomId}
                    checkInDate={item.checkInDate}
                    checkOutDate={item.checkOutDate}
                    saveRow={this.saveRow}
                  />
                );
              } else {
                return (
                  <TableRow
                    key={index}
                    item={item}
                    deleteButton={() => this.deleteEntry(item)}
                    editRow={() => this.editRow(item.id)}
                  />
                );
              }
            })
            .sort(this.compareFunction)}
        </tbody>
      </table>
    );
  }
}

export default SearchResults;
