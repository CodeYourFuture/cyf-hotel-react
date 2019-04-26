import React, { Component } from "react";
import moment from "moment";
class SearchResults extends Component {
  state = {
    currentRow: null
  };
  handler = result => {
    this.setState({
      currentRow: result.id
    });
  };
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">title</th>
            <th scope="col">first name</th>
            <th scope="col">surname</th>
            <th scope="col">email</th>
            <th scope="col">room id</th>
            <th scope="col">checkin</th>
            <th scope="col">checkout</th>
          </tr>
        </thead>
        <tbody>
          {this.props.results.map(result => {
            const currentRow = result.id === this.state.currentRow;

            return (
              <tr
                className={currentRow ? "Selected" : "unselect"}
                onClick={() => this.handler(result)}
              >
                <th scope="row">{result.id}</th>
                <td>{result.title}</td>
                <td>{result.firstName}</td>
                <td>{result.surname}</td>
                <td>{result.email}</td>
                <td>{result.roomId}</td>
                <td>{result.checkInDate}</td>
                <td>{result.checkOutDate}</td>
                <td>
                  {moment(result.checkOutDate).diff(result.checkInDate, "days")}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default SearchResults;
