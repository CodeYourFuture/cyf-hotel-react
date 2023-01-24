import React, { Component } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";

class SearchResults extends React.Component {
  constructor(props) {
    super(props);

    // this.toggle = { }

    this.getId = this.getId.bind(this);
  }
  state = {};

  getId(e) {}

  render() {
    return (
      <div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">Firstname</th>
              <th scope="col">Surname</th>
              <th scope="col">Email</th>
              <th scope="col">Room ID</th>
              <th scope="col">Check-in Date</th>
              <th scope="col">Check-out Date</th>
              <th scope="col">Nights</th>
              <th scope="col">Profile</th>
            </tr>
          </thead>
          <tbody>
            {this.props.results.map(result => {
              return (
                <tr>
                  <th>{result.id}</th>
                  <td>{result.title}</td>
                  <td>{result.firstName}</td>
                  <td>{result["surname"]}</td>
                  <td>{result["email"]}</td>
                  <td>{result.roomId}</td>
                  <td>{result["checkInDate"]}</td>
                  <td>{result["checkOutDate"]}</td>

                  <td>
                    {moment(result["checkOutDate"]).diff(
                      moment(result["checkInDate"]),
                      "days"
                    )}
                  </td>
                  <td>
                    <button className={"btn btn-primary"} onClick={this.getId}>
                      Show Profile
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* <CustomerProfile id={ } /> */}
      </div>
    );
  }
}

export default SearchResults;
