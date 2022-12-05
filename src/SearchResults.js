import React from "react";
import Moment from "react-moment";
function SearchResults({ results }) {
  return (
    <div id="searchResults">
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room id</th>
            <th scope="col">Check in Date</th>
            <th scope="col">Check in Out</th>
            <th scope="col">Number of Nights</th>
          </tr>
        </thead>
        <tbody>
          {results.map((item, i) => {
            return (
              <tr key={i}>
                <th scope="row">{item.id}</th>
                <td>{item.title}</td>
                <td>{item.firstName}</td>
                <td>{item.surname}</td>
                <td>{item.email}</td>
                <td>{item.roomId}</td>
                <td>
                  <Moment format="DD-MM-YYYY">{item.checkInDate}</Moment>
                </td>
                <td>
                  <Moment format="DD-MM-YYYY">{item.checkOutDate}</Moment>
                </td>
                <td>
                  <Moment diff={item.checkInDate} unit="days">
                    {item.checkOutDate}
                  </Moment>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default SearchResults;
