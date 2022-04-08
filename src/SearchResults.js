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
    <>
      <table className="table">
        <thead className="table-header">
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
        <tbody>
          {props.bookings.map((booking, index) => {
            return (
              <BookingItem
                booking={booking}
                key={index}
                handleClick={handleButtonClick}
              />
            );
          })}
        </tbody>
      </table>
      {id && <CustomerProfile id={id} />}
    </>
  );
}

function BookingItem(props) {
  const booking = props.booking;
  const [toggleSelected, setToggleSelected] = useState(false);
  const [bookingItemStyle, setBookingItemStyle] = useState("default-row");

  function changeColor() {
    setToggleSelected(!toggleSelected);
    if (!toggleSelected) {
      setBookingItemStyle("selected-row");
    } else {
      setBookingItemStyle("default-row");
    }
  }

  return (
    <tr className={bookingItemStyle} onClick={changeColor}>
      <th scope="row">{booking.id}</th>
      {headings.map((heading, index) => {
        return (
          <HeadingItem
            heading={heading}
            booking={booking}
            key={index}
            handleClick={props.handleClick}
          />
        );
      })}
    </tr>
  );
}

function HeadingItem(props) {
  const heading = props.heading;
  const booking = props.booking;

  if (heading === "id") {
    return null;
  } else if (heading === "numberOfNights") {
    const checkIn = moment(booking.checkInDate);
    const checkOut = moment(booking.checkOutDate);
    const dateDifference = checkOut.diff(checkIn, "days");

    return <td>{dateDifference}</td>;
  } else if (heading === "profile") {
    return (
      <td>
        <button onClick={() => props.handleClick(booking.id)}>
          Show profile
        </button>
      </td>
    );
  } else {
    return <td>{booking[heading]}</td>;
  }
}

function CustomerProfile(props) {
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(res => res.json())
      .then(data => console.log(data));
  }, [props.id]);

  return `Customer ${props.id} Profile`;
}

export default SearchResults;
