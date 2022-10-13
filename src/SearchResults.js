import React from "react";

const SearchResults = props => {
  return (
    <div className="table-container">
      <p className="results">
        Results:<span> </span>
      </p>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">First name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room id</th>
            <th scope="col">Check-in date</th>
            <th scope="col">Check-out date</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map(result => {
            let {
              title,
              firstName,
              surname,
              email,
              roomId,
              checkInDate,
              checkOutDate
            } = result;

            return (
              <tr>
                <td>{title}</td>
                <td>{firstName}</td>
                <td>{surname}</td>
                <td>{email}</td>
                <td>{roomId}</td>
                <td>{checkInDate}</td>
                <td>{checkOutDate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
