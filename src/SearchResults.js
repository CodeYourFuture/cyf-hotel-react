import React from "react";
// import CalcDays from './CalcDays.js'

const SearchResults = ({ results, totalNights }) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>First Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Room ID</th>
            <th>Check in Date</th>
            <th>Check out Date</th>
            <th>Number of Nights</th>
          </tr>
          {results.map(fakeBookings => {
            return (
              <tr className="booking" key={fakeBookings.id}>
                <td>{fakeBookings.id}</td>
                <td>{fakeBookings.title}</td>
                <td>{fakeBookings.firstName}</td>
                <td>{fakeBookings.surname}</td>
                <td>{fakeBookings.email}</td>
                <td>{fakeBookings.roomId}</td>
                <td>{fakeBookings.checkInDate}</td>
                <td>{fakeBookings.checkOutDate}</td>
                <td>{totalNights}</td>
              </tr>
            );
          })}
          <tr>
            <td>6</td>
            <td>Mr.</td>
            <td>Denver</td>
            <td>Schouw</td>
            <td>denver@cyf.com</td>
            <td>100</td>
            <td>2022-12-16</td>
            <td>2023-01-06</td>
            <td>{totalNights}</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Mrs.</td>
            <td>Lizelle</td>
            <td>Kau</td>
            <td>lizelle@cyf.com</td>
            <td>101</td>
            <td>2022-12-23</td>
            <td>2023-01-18</td>
            <td>{totalNights}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
