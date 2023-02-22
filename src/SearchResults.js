import React, { useState } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";

const SearchResults = ({ results }) => {
  // let bookingList = require("./data/fakeBookings.json");
  let bookingList = results;
  const [rowISActive, setRowIsActive] = useState(false);
  const [custID, setCustID] = useState("");

  function handleRowClick(id) {
    if (rowISActive) {
      setRowIsActive(false);
    } else {
      setRowIsActive(id);
    }
    // console.log(`Row ${event.key} is clicked!`)
    // setRowIsActive()
  }

  function handleProfile(event) {
    let id = (parseInt(event.target.id) + 1).toString();
    setCustID(id);
    console.log(id);
    console.log(`The value of id is ${id}`);
  }

  return (
    <div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Title</th>
              <th scope="col">First Name</th>
              <th scope="col">Surname</th>
              <th scope="col">Email</th>
              <th scope="col">Room ID</th>
              <th scope="col">Check-in date</th>
              <th scope="col">check-out date</th>
              <th scope="col">Number of Nights</th>
            </tr>
          </thead>
          <tbody>
            {bookingList.map((booking, key) => {
              return (
                <tr
                  key={key}
                  style={{ color: rowISActive === booking.id ? "red" : "" }}
                  onClick={() => handleRowClick(booking.id)}
                >
                  <th scope="row">{booking.id}</th>
                  <td>{booking.title}</td>
                  <td>{booking.firstName}</td>
                  <td>{booking.surname}</td>
                  <td>{booking.email}</td>
                  <td>{booking.roomId}</td>
                  <td>{booking.checkInDate}</td>
                  <td>{booking.checkOutDate}</td>
                  <td>
                    {moment(booking.checkOutDate).diff(
                      booking.checkInDate,
                      "days"
                    )}
                  </td>
                  <td>
                    <button id={key} onClick={handleProfile}>
                      Show Profile
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {custID ? <CustomerProfile cID={custID} /> : <h2>Customer Profile</h2>}
    </div>
  );
};
export default SearchResults;
