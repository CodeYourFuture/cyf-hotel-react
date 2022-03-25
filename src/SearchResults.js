import React from "react";
import moment from "moment";

const headings = [
  "Id",
  "Title",
  "First Name",
  "Surname",
  "Email",
  "room Id",
  "Check-In",
  "Check-Out",
  "Night"
];
const SearchResults = props => {
  return (
    <table className="table">
      <thead>
        <tr>
          {headings.map(heading => {
            return <th scope="col">{heading}</th>;
          })}
        </tr>
      </thead>

      <tbody>
        {props.bookings.map(booking => {
          return (
            <tr>
              <th scope="row">{booking.id}</th>
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
};

export default SearchResults;
