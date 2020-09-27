import moment from "moment";
import React from "react";
function SearchResults(results) {
  return (
    <div className="table-responsive{-sm|-md|-lg|-xl} table-bordered container">
      <table className="table">
        <caption>List of users</caption>
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room Id</th>
            <th scope="col">Check In Date</th>
            <th scope="col">Check Out Date</th>
            <th scope="col">Number of Nights</th>
          </tr>
        </thead>
        <tbody>
          {results.results.map((item, index) => {
            var a = moment(item.checkOutDate);
            var b = moment(item.checkInDate);
            return (
              <tr key={index}>
                <th>{item.id}</th>
                <th>{item.title}</th>
                <th>{item.firstName}</th>
                <th>{item.surname}</th>
                <th>{item.email}</th>
                <th>{item.roomId}</th>
                <th>{item.checkInDate}</th>
                <th>{item.checkOutDate}</th>
                <th>{a.diff(b, "day")}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default SearchResults;
