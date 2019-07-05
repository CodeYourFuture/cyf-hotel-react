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
      selectedEditRowId: null
    };
  }
  editRow = id => {
    this.setState({
      selectedEditRowId: id
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
          {this.props.fakeBookingsList
            .sort(this.compareFunction)
            .map((item, index) => {
              if (item.id === this.props.selectedEditRowId) {
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
                    saveRow={this.props.saveRow}
                  />
                );
              } else {
                return (
                  <TableRow
                    key={index}
                    item={item}
                    deleteButton={() => this.props.deleteEntry(item)}
                    editRow={() => this.props.editRow(item.id)}
                  />
                );
              }
            })}
        </tbody>
      </table>
    );
  }
}

export default SearchResults;
