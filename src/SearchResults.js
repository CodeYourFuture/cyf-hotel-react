import React, { useState } from "react";
import moment from "moment";
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
  const [selected, setSelected] = useState(false);
  //  const [id, setId] = useState("");
  const rowClick = () => setSelected(!selected);
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
      style={isClicked ? { border: "2px solid green" } : {}}
      className={isClicked ? "clickedClass" : ""}
    >
      <th scope="row">{booking.id}</th>
      {headings.map((heading, index) => {
        if (heading === "id") {
          return null;
        } else if (heading === "numberOfNights") {
          const checkIn = moment(booking.checkInDate);
          const checkOut = moment(booking.checkOutDate);
          const difference = checkOut.diff(checkIn, "days");
          return <td key={index}>{difference}</td>;
        } else {
          return <td key={index}>{booking[heading]}</td>;
        }
      })}
    </tr>
  );
}

export default SearchResults;
