import React from "react";

const SearchResults = (props) => {
    return (
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room id</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
          </tr>
        </thead>
        <tbody>
        {props.results.map((result, index) => {
            return (
                <tr key={index}>
                    <td>{result.id}</td>
                    <td>{result.title}</td>
                    <td>{result.firstName}</td>
                    <td>{result.surname}</td>
                    <td>{result.email}</td>
                    <td>{result.roomId}</td>
                    <td>{result.checkInDate}</td>
                    <td>{result.checkOutDate}</td>
                </tr>
            )
        })}
        </tbody>
      </table>
    );
};

export default SearchResults;