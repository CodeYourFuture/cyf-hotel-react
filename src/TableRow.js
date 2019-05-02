import React, { Component } from "react";
import moment from "moment";

class TableRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRowSelected: false
    };
  }

  handleClick = event => {
    this.setState({ isRowSelected: !this.state.isRowSelected });
  };

  render() {
    let result = this.props.result;
    return (
      <tr
        key={result.id}
        className={this.state.isRowSelected ? "selected" : ""}
        onClick={this.handleClick}
      >
        <th scope="row">{result.id}</th>
        <td>{result.title}</td>
        <td>{result.firstName}</td>
        <td>{result.surname}</td>
        <td>{result.email}</td>
        <td>{result.roomId}</td>
        <td>{result.checkInDate}</td>
        <td>{result.checkOutDate}</td>
        <td>{moment(result.checkOutDate).diff(result.checkInDate, "days")}</td>
      </tr>
    );
  }
}

export default TableRow;
