import React, { useState, useEffect } from "react";
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
  `number of nights`,
  `profile`
];

function SearchResults(props) {
  const [id, setId] = useState(null);

  function handleButtonClick(clickedId) {
    setId(clickedId);
  }
  const DisplayData = props.bookings.map(booking => {
    return <OurCustomRow booking={booking} handleClick={handleButtonClick} />;
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
      {id ? <CustomerProfile id={id} /> : null}
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
      style={isClicked ? { border: "2px solid red" } : {}}
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
      <td>{booking.profile}</td>
      <button onClick={() => handleClick(booking.id)}>Show Profile</button>
    </tr>
  );
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
