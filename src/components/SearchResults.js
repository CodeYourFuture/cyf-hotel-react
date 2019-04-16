import React, { Component } from "react";
import moment from "moment";

export default class SearchResults extends Component {
  constructor() {
    super();
    this.state = {};
  }

  rowSelected = event => {
    this.setState(pre => {
      return { selected: !pre.selected };
    });

    this.state.selected
      ? (event.target.parentNode.className = "bg-warning")
      : (event.target.parentNode.className = "");
  };

  render() {
    const result = this.props.results.map(r => (
      <tr key={r.id} data-id={r.id} onClick={this.rowSelected}>
        <th scope="row">{r.id}</th>
        <td>{`${r.title} ${r.firstName} ${r.surname}`}</td>
        <td>{r.email}</td>
        <td>{`room: ${r.roomId}`}</td>
        <td>{r.checkInDate}</td>
        <td>{r.checkOutDate}</td>
        <td>{`${moment(r.checkOutDate).diff(
          moment(r.checkInDate),
          "days"
        )} days`}</td>
      </tr>
    ));
    return (
      <table className="table table-dark">
        <tbody>{result}</tbody>
      </table>
    );
  }
}
