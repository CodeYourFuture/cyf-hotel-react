import React, { useState, useEffect } from "react";
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
  `numberOfNights`,
  `profile`
];
function SearchResults(props) {
  const [id, setId] = useState(null);

  function handleButtonClick(clickedId) {
    setId(clickedId);
  }
  return (
    <div>
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
        } else if (heading === "profile") {
          return (
            <button onClick={() => handleClick(booking.id)}>profile</button>
          );
        } else {
          return <td key={index}>{booking[heading]}</td>;
        }
      })}
    </tr>
  );
}
function CustomerProfile(props) {
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(res => res.json())
      .then(data => console.log(data));
  }, []);
  return `Customer ${props.id} Profile`;
}

export default SearchResults;
