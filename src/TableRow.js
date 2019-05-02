import React, { Component } from "react";

class TableRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
  }

  toggleHighlightedRow = e => {
    this.setState(prevState => ({
      selected: !prevState.selected
    }));
  };

  render() {
    return (
      <tr
        onClick={this.toggleHighlightedRow}
        key=""
        id={1}
        className={this.state.selected ? "bg-info" : ""}
      >
        <th scope="row" key={this.props.id}>
          {this.props.id}
        </th>
        <td>{this.props.title}</td>
        <td>{this.props.firstName}</td>
        <td>{this.props.surname}</td>
        <td>{this.props.email}</td>
        <td>{this.props.roomId}</td>
        <td>{this.props.checkInDate}</td>
        <td>{this.props.checkOutDate}</td>
        <td>{this.props.nights}</td>
      </tr>
    );
  }
}

export default TableRow;
