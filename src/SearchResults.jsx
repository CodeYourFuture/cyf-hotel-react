import React from "react";
import CustomerData from "./CustomerData";
import moment from "moment";

function SearchResults(props) {
  const results = props.results;

  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Room ID</th>
          <th>Check in date</th>
          <th>Check out date</th>
          <th>Number of Nights</th>
        </tr>
      </thead>
      <tbody>
        {results.map(result => {
          return (
            <CustomerData
              key={result.id}
              id={result.id}
              title={result.title}
              firstName={result.firstName}
              surname={result.surname}
              email={result.email}
              phone={result.phone}
              roomId={result.roomId}
              checkInDate={result.checkInDate}
              checkOutDate={result.checkOutDate}
              nights={moment(result.checkOutDate).diff(
                moment(result.checkInDate),
                "days"
              )}
            />
          );
        })}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="9" />
        </tr>
      </tfoot>
    </table>
  );
}

export default SearchResults;
