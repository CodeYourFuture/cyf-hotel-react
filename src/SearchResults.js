import React from "react";
import FakeBookings from "./data/fakeBookings.json";
import moment from "moment";

const SearchResults = props => {
  return (
    <div className="table-responsive-lg table-responsive-xl">
      <table className="table tableColor table-bordered table-hover table-striped">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">First name</th>
            <th scope="col">Last name</th>
            <th scope="col">Email</th>
            <th scope="col">Room no.</th>
            <th scope="col">Check-in</th>
            <th scope="col">Check-out</th>
            <th scope="col">Nights</th>
          </tr>
        </thead>
        <tbody>
          {FakeBookings.map((booking, index) => (
            <tr key={index}>
              <td>{booking.id}</td>
              <td>{booking.title}</td>
              <td>{booking.firstName}</td>
              <td>{booking.surname}</td>
              <td>{booking.email}</td>
              <td>{booking.roomId}</td>
              <td>{booking.checkInDate}</td>
              <td>{booking.checkOutDate}</td>
              <td>
                {moment(booking.checkOutDate).diff(booking.checkInDate, "days")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
