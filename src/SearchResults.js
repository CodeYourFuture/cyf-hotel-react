import React from "react";
import moment from "moment";
import SearchResultRows from "./SearchResultRows";

const headings = [
  "id",
  "title",
  "firstName",
  "surname",
  "email",
  "roomId",
  "checkInDate",
  "checkOutDate",
  "numberOfNights"
];

function SearchResults(props) {
  return (
    <table>
      <thead>
        <tr>
          {headings.map(heading => {
            return <th scope="col">{heading}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {props.bookings.map(booking => {
          return <SearchResultRows booking={booking} headings={headings} />;
        })}
      </tbody>
    </table>
  );

  // (
  //   <tr>
  //     <th scope="row">{booking.id}</th>
  //     {headings.map((heading) => {
  //       if (heading === "id") {
  //         return null;
  //       } else if (heading === "numberOfNights") {
  //         const checkIn = moment(booking.checkInDate);
  //         const checkOut = moment(booking.checkOutDate);
  //         const difference = checkOut.diff(checkIn, "days");
  //         return <td>{difference}</td>;
  //       } else {
  //         return <td>{booking[heading]}</td>;
  //       }
  //     })}
  //   </tr>
  // );
  // })}
}

export default SearchResults;
