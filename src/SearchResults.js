import React, { useState, useEffect } from "react";
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
  `numberOfNights`,
  `profile?`
];
function SearchResults(props) {
  const [id, setId] = useState(null);
  const [ascending, setAscending] = useState(true);

  function handleButtonClick(clickedId) {
    setId(clickedId);
  }
  const sortedBookings = [...props.bookings].sort((a, z) => {
    return ascending ? a.roomId - z.roomId : z.roomId - a.roomId;
  });
  return (
    <div>
      <button onClick={() => setAscending(!ascending)}>
        Ali's toggle is {`${ascending}`}
      </button>
      <table>
        <thead>
          <tr>
            {headings.map(heading => {
              return <th scope="col">{heading}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {sortedBookings.map(booking => {
            return (
              <OurCustomRow booking={booking} handleClick={handleButtonClick} />
            );
          })}
        </tbody>
      </table>
      {id && <CustomerProfile id={id} />}
    </div>
  );
}
function OurCustomRow({ booking, handleClick }) {
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
        } else if (heading === "profile?") {
          return (
            <button onClick={() => handleClick(booking.id)}>
              show profile
            </button>
          );
        } else {
          return <td>{booking[heading]}</td>;
        }
      })}
    </tr>
  );
}
function CustomerProfile(props) {
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customer/${props.id}`)
      .then(res => res.json())
      .then(data => console.log(data));
  }, [props.id]);
  return `Customer ${props.id} Profile`;
}
export default SearchResults;
