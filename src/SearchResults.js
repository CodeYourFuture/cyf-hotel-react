import React, { useState } from "react";
import moment from "moment";
// import Search from "./Search";
// import fakeBookings from "./date/fakeBookings.json";
// import Bookings from "./Bookings";
const headings = [
  `id`,
  `title`,
  `firstName`,
  `surname`,
  `email`,
  `roomId`,
  `checkInDate`,
  `checkOutDate`,
  `numberOfNights`
];
function SearchResults(props) {
  return (
    <table>
      {/* <caption>SearchResults</caption> */}
      <thead>
        <tr>
          {headings.map(heading => {
            return <th scope="col">{heading}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {props.bookings.map(booking => {
          return <OurCustomRow booking={booking} />;
        })}
      </tbody>
    </table>
  );
}
function OurCustomRow({ booking }) {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <tr
      onClick={() => {
        setIsClicked(!isClicked);
      }}
      style={isClicked ? { border: "2px solid blue" } : {}}
    >
      <th scope="row">{booking.id}</th>
      {headings.map(heading => {
        if (heading === "id") {
          return null;
        } else if (heading === "numberOfNights") {
          const checkIn = moment(booking.checkInDate);
          const checkOut = moment(booking.checkOutDate);
          const difference = checkOut.diff(checkIn, "days");
          return <td>{difference}</td>;
        } else {
          return <td>{booking[heading]}</td>;
        }
      })}
    </tr>
  );
}
export default SearchResults;
