import React, { Component } from "react";

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {};
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
            </tr>
          </thead>
          <tbody>
            {/* <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr> */}

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
