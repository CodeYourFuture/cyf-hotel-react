import React from "react";

const SearchResults = props => {
  console.log(`SearchResults props: ${props}`);

  return (
    // no bootstrap classes used, all hand-written custom css
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
        </tr>
      </thead>
      <tbody className="search-results-table-body">
        {props.results.map(element => {
          return (
            <tr key={element.id} className="search-results-table-body-row">
              <th scope="row">{element.id}</th>
              <td>{element.title}</td>
              <td>{element.firstName}</td>
              <td>{element.surname}</td>
              <td>{element.email}</td>
              <td>{element.roomId}</td>
              <td>{element.checkInDate}</td>
              <td>{element.checkOutDate}</td>
              <td>
                {// no need for momentjs.. create two new date objects, subtract them from each other, divide by milliseconds per day
                (new Date(`${element.checkOutDate}T00:00:01Z`) -
                  new Date(`${element.checkInDate}T00:00:01Z`)) /
                  86400000}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
