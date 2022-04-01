import React from "react";
import moment from "moment";

export default function SearchResults(props) {
  const headings = [
    "id",
    "title",
    "first name",
    "surname",
    "email",
    "room id",
    "checkInDate",
    "checkOutDate",
    "numberOfNights"
  ];

  return (
    <table className="table table-bordered border-primary table-secondary table-hover table-sm">
      {/*_____________________table head________________________*/}
      <thead className="search-result-table-head">
        <tr>
          {headings.map((heading, index) => {
            return (
              <th key={index} scope="col">
                {heading}
              </th>
            );
          })}
        </tr>
      </thead>

      {/*_____________________table body________________________*/}
      <tbody>
        {props.bookings.map((booking, index) => {
          return (
            <tr key={index}>
              <th key={index} scope="row">
                {booking.id}
              </th>
              <td>{booking.title}</td>
              <td>{booking.firstName}</td>
              <td>{booking.surname}</td>
              <td>{booking.email}</td>
              <td>{booking.roomId}</td>
              <td>{booking.checkInDate}</td>
              <td>{booking.checkOutDate}</td>
              <td>
                {moment(booking.checkOutDate).diff(
                  moment(booking.checkInDate),
                  "days"
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
