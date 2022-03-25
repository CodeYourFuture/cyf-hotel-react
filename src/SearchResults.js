import React from "react";
import moment from "moment";

const headers = [
  "Id",
  "Title",
  "First Name",
  "Surname",
  "Email",
  "RoomId",
  "checkInDate",
  "checkOutDate",
  "Number of nights"
];

function SearchResults(props) {
  return (
    <table className="table table-striped">
      <thead>
        {headers.map(header => {
          return <th scope="col">{header}</th>;
        })}
      </thead>

      <tbody>
        {props.results.map(booking => {
          return (
            <tr>
              <th scope="row">{booking.Id}</th>
              {headers.map(header => {
                if (header === "Id") {
                  return null;
                } else if (header === "Number of nights") {
                  const checkInDay = moment(booking.checkInDate);
                  const checkOutDay = moment(booking.checkOutDate);
                  const lengthOfStay = checkOutDay.diff(checkInDay, "days");
                  return lengthOfStay;
                } else {
                  return <td>{booking[header]}</td>;
                }
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default SearchResults;
