import React, { useState } from "react";
// import ourBookings from "./data/fakeBookings.json";
import moment from "moment";

const headings = [
  `id`,
  `title`,
  `first name`,
  `surname`,
  `email`,
  `room id`,
  `check in date`,
  `check out date`,
  `number of nights`
];

function SearchResults(props) {
  const DisplayData = props.bookings.map(booking => {
    return <OurCustomRow booking={booking} />;
  });

  return (
    <div className="table-container">
      <table className="table table-striped">
        <thead>
          <tr>
            {headings.map(heading => {
              return <th scope="col">{heading}</th>;
            })}
          </tr>
        </thead>
        <tbody>{DisplayData}</tbody>
      </table>
    </div>
  );
}

function OurCustomRow({ booking }) {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <tr
      onClick={() => {
        setIsClicked(!isClicked);
      }}
    >
      <th scope="row">
        <td>{booking.id}</td>
      </th>
      <td>{booking.title}</td>
      <td>{booking.firstName}</td>
      <td>{booking.surname}</td>
      <td>{booking.email}</td>
      <td>{booking.roomId}</td>
      <td>{booking.checkInDate}</td>
      <td>{booking.checkOutDate}</td>
      <td>
        {moment(booking.checkOutDate).diff(moment(booking.checkInDate), "day")}
      </td>
    </tr>
  );
}

export default SearchResults;
