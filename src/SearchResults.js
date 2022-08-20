import React from "react";
import SearchResultSingular from "./SearchResultSingular";

const SearchResults = props => {
  // console.log(`SearchResults props: ${props}`);

  return (
    // no bootstrap classes used, all hand-written css
    <table className="search-results-table">
      <thead className="search-results-table-head">
        <tr className="search-results-table-head-row">
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room ID</th>
          <th scope="col">Check In Date</th>
          <th scope="col">Check Out Date</th>
          <th scope="col">Total Nights</th>
          <th scope="col">Profile</th>
        </tr>
      </thead>
      <tbody className="search-results-table-body">
        {props.results.map(element => {
          return (
            <SearchResultSingular
              key={element.id}
              id={element.id}
              title={element.title}
              firstName={element.firstName}
              surname={element.surname}
              email={element.email}
              roomId={element.roomId}
              checkInDate={element.checkInDate}
              checkOutDate={element.checkOutDate}
              setCustomerId={props.setCustomerId}
              // ^pass down the set State function from Bookings.js to SearchResultSingular.js
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
