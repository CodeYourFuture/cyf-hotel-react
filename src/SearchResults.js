import React, { Component } from "react";
import moment from "moment";

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  changeColor = e => {
    this.setState(previousState => {
      return {};
    });
  };

  render() {
    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Title</th>
              <th scope="col">First Name</th>
              <th scope="col">Surname</th>
              <th scope="col">Email</th>
              <th scope="col">Room ID</th>
              <th scope="col">Check in Date</th>
              <th scope="col">Check out Date</th>
              <th scope="col">Night stayed</th>
            </tr>
          </thead>
          <tbody>
            {this.props.results.map(visitor => {
              return (
                <tr onClick={this.changeColor}>
                  <td>{visitor.id}</td>
                  <td>{visitor.title}</td>
                  <td>{visitor.firstName}</td>
                  <td>{visitor.surname}</td>
                  <td>{visitor.email}</td>
                  <td>{visitor.roomId}</td>
                  <td>{visitor.checkInDate}</td>
                  <td>{visitor.checkOutDate}</td>
                  <td>
                    {" "}
                    {moment(visitor.checkOutDate).diff(
                      visitor.checkInDate,
                      "days"
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default SearchResults;