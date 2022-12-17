import React, { useState } from "react";
import Moment from "moment";
import "./App.css";

export default function SearchResults({ results, handleProfile }) {
  // let bookings = [
  //   {
  //     id: 1,
  //     title: "Mr",
  //     firstName: "John",
  //     surname: "Doe",
  //     email: "johndoe@doe.com",
  //     roomId: 2,
  //     checkInDate: "2017-11-21",
  //     checkOutDate: "2017-11-23"
  //   },
  //   {
  //     id: 2,
  //     title: "Doctor",
  //     firstName: "Sadia",
  //     surname: "Begum",
  //     email: "begum_sadia@sadia.org",
  //     roomId: 1,
  //     checkInDate: "2018-02-15",
  //     checkOutDate: "2018-02-28"
  //   }
  // ];
  let bookings = results;

  const [bookingColor, setbookingColor] = useState({});

  const changeColor = bookingId => {
    return setbookingColor(bookingColor => {
      if (bookingColor[bookingId] === "yellow") {
        let updated = { ...bookingColor };
        updated[bookingId] = "white";
        return updated;
      } else {
        let updated = { ...bookingColor };
        updated[bookingId] = "yellow";
        return updated;
      }
    });
  };
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">First name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room ID</th>
            <th scope="col">Check-in Date</th>
            <th scope="col">Check-out Date</th>
            <th scope="col">Number of nights</th>
            <th scope="col">Buttons</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(booking => (
            <tr
              className={bookingColor[booking.id]}
              onClick={e => changeColor(booking.id)}
            >
              <td>{booking.title}</td>
              <td>{booking.firstName}</td>
              <td>{booking.surname}</td>
              <td>{booking.email}</td>
              <td>{booking.roomId}</td>
              <td>{booking.checkInDate}</td>
              <td>{booking.checkOutDate}</td>
              <td>
                {Moment(booking.checkOutDate).diff(
                  Moment(booking.checkInDate),
                  "days"
                )}
              </td>
              <td>
                <button
                  onClick={() => {
                    handleProfile(booking.id);
                  }}
                >
                  Show profile
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
