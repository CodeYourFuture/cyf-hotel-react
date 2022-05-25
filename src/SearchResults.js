import React, { useState } from "react";
import CustomerProfile from "./CustomerProfile";
const moment = require("moment");

const numberOfNights = (dayIn, dayOut) => {
  const dayInToMoment = moment(dayIn);
  const dayOutToMoment = moment(dayOut);
  return dayOutToMoment.diff(dayInToMoment, "days");
};

const SearchResult = props => {
  const [selected, setSelected] = useState([]);
  const [Id, setId] = useState("");
  const toggleSelected = bookingId => {
    let tempSelected = [...selected];
    if (tempSelected.includes(bookingId)) {
      for (let i = 0; i < tempSelected.length; i++) {
        if (tempSelected[i] === bookingId) {
          tempSelected.splice(i, 1);
        }
      }
    } else {
      tempSelected.push(bookingId);
    }
    setSelected(tempSelected);
  };
  console.log(props.results);
  return props.results.length > 0 ? (
    <div className="search-container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room Id</th>
            <th scope="col">Check in Date</th>
            <th scope="col">Check out Date</th>
            <th scope="col">Number of Nights</th>
          </tr>
        </thead>

        {props.results.map((booking, i) => (
          <tbody key={i}>
            <tr
              onClick={() => toggleSelected(i)}
              className={selected.includes(i) ? "selected" : ""}
              key={i}
            >
              <th scope="row">{i + 1}</th>
              <td>{booking.title} </td>
              <td>{booking.firstName} </td>
              <td>{booking.surname}</td>
              <td>{booking.email}</td>
              <td>{booking.roomId}</td>
              <td>{booking.checkInDate}</td>
              <td> {booking.checkOutDate}</td>
              <td>
                {numberOfNights(booking.checkInDate, booking.checkOutDate)}
              </td>
              <td>
                <button
                  onClick={() => setId(booking.id)}
                  className="btn btn-primary"
                >
                  Show Customer Profile
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
      <CustomerProfile i={Id} />
    </div>
  ) : (
    "loading the data"
  );
};
export default SearchResult;
