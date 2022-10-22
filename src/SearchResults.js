import React, { useState } from "react";
import moment from "moment";
import CostumerProfile from "./CostumerProfile";

const NumberOfNights = (dateIn, dateOut) => {
  let a = moment(dateIn);
  let b = moment(dateOut);
  return b.diff(a, "days");
};

const SearchResults = props => {
  const [id, setId] = useState(null);

  function handleButtonClick(clickedId) {
    setId(clickedId);
  }

  return (
    <div>
      <table className="table container">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Room Id</th>
            <th scope="col">Check In</th>
            <th scope="col">Check Out</th>
            <th scope="col">Nights</th>
            <th scope="col">Profiles</th>
          </tr>
        </thead>
        <tbody>
          {props.bookings.map(booking => {
            return (
              <CustomRow
                key={booking.id}
                booking={booking}
                handleClick={handleButtonClick}
              />
            );
          })}
        </tbody>
      </table>
      {id ? <CostumerProfile id={id} /> : null}
    </div>
  );
};

const CustomRow = ({ booking, handleClick }) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <tr
      onClick={() => {
        setIsClicked(!isClicked);
      }}
      style={isClicked ? { backgroundColor: "lightgray" } : {}}
    >
      <td>{booking.title}</td>
      <td>{booking.firstName}</td>
      <td>{booking.surname}</td>
      <td>{booking.email}</td>
      <td>{booking.roomId}</td>
      <td>{booking.checkInDate}</td>
      <td>{booking.checkOutDate}</td>
      <td>{NumberOfNights(booking.checkInDate, booking.checkOutDate)}</td>
      <td>
        <button onClick={() => handleClick(booking.id)}>Show Profile</button>
      </td>
    </tr>
  );
};
export default SearchResults;
