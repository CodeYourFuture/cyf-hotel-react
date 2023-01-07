import React, { useState } from "react";
import CustomerProfile from "./CustomerProfile";

function SearchResults(props) {
  const [color, setColor] = useState(false);
  const [customer, setCustomer] = useState("");

  function handleRowColorChange() {
    return (
      <tr>
        onClick=
        {() => {
          setColor(() => !color);
        }}
        ; style={{ backgroundColor: `${color ? "pink" : "white"}` }}
      </tr>
    );
  }

  function showCustomerProfile(id) {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then(response => response.json())
      .then(data => setCustomer(data));
  }

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr onClick={handleRowColorChange}>
            <th scope="col">Number</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">E-mail</th>
            <th scope="col">Room Id</th>
            <th scope="col">Check in Date</th>
            <th scope="col">Check out Date</th>
            <th scope="col">Number Of Days</th>
          </tr>
        </thead>
        {props.bookings.map(booking => {
          return (
            <tbody key={booking.id}>
              <tr>
                <td>{booking.id}</td>
                <td>{booking.title}</td>
                <td>{booking.firstName}</td>
                <td>{booking.surname}</td>
                <td>{booking.email}</td>
                <td>{booking.roomId}</td>
                <td> {booking.checkInDate}</td>
                <td>{booking.checkOutDate}</td>
                <td>{booking.checkInDate}</td>
                <td>
                  <button onClick={() => showCustomerProfile(booking.id)}>
                    show profile
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
      <CustomerProfile {...customer} />
    </div>
  );
}

export default SearchResults;
