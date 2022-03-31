import React from "react";
import moment from "moment";

const CalculateNumberOfNights = (inDate, outDate) => {
  let a = moment(inDate);
  let b = moment(outDate);
  return b.diff(a, "days");
};

// check the shape of the data against the fakedata

// add https://cyf-react.glitch.me/

const SearchResults = (props) => {
  return (
    <table className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Family Name</th>
            <th scope="col">Email</th>
            <th scope="col">Room ID</th>
            <th scope="col">Check In </th>
            <th scope="col">Check Out </th>
            <th scope="col">Nights Stay</th>
          </tr>
        </thead>

        <tbody>
          {props.results.map((result) => {
            return (
              <tr key={result.id}>
                <td>{result.title}</td>
                <td>{result.firstName}</td>
                <td>{result.surname}</td>
                <td>{result.email}</td>
                <td>{result.roomId}</td>
                <td>{result.checkInDate}</td>
                <td>{result.checkOutDate}</td>
                <td>
                  {CalculateNumberOfNights(
                    result.checkInDate,
                    result.checkOutDate
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </table>
  );
};

export default SearchResults;
