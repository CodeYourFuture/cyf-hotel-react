import moment from "moment";
import React, { useState } from "react";
function SearchResults(results) {
  const [rowClass, setRowClass] = useState(true);

  const onClick = e => {
    e.preventDefault();
    setRowClass(!rowClass);
    let a = e.target.parentElement;
    if (rowClass) {
      a.className = "setHighlight";
    } else {
      a.className = "unSetHighlight";
    }
  };

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
              <tr key={index} onClick={onClick}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.firstName}</td>
                <td>{item.surname}</td>
                <td>{item.email}</td>
                <td>{item.roomId}</td>
                <td>{item.checkInDate}</td>
                <td>{item.checkOutDate}</td>
                <td>{a.diff(b, "day")}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default SearchResults;
