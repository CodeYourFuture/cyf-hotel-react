import React from "react";
import FakeBookings from "./data/fakeBookings.json";
import Moment from "react-moment";
import "moment-timezone";

const SearchResults = prop => {
  const bookingData = [
    {
      id: 1,
      title: "Mr",
      firstName: "John",
      surname: "Doe",
      email: "johndoe@doe.com",
      roomId: 2,
      checkInDate: "2017-11-21",
      checkOutDate: "2017-11-23"
    },
    {
      id: 2,
      title: "Doctor",
      firstName: "Sadia",
      surname: "Begum",
      email: "begum_sadia@sadia.org",
      roomId: 1,
      checkInDate: "2018-02-15",
      checkOutDate: "2018-02-28"
    },
    {
      id: 3,
      title: "Prince",
      firstName: "Henry",
      surname: "Wales",
      email: "harry@wales.com",
      roomId: 5,
      checkInDate: "2018-03-01",
      checkOutDate: "2018-04-09"
    },
    {
      id: 4,
      title: "Dame",
      firstName: "Judi",
      surname: "Dench",
      email: "Judi@dench.co.uk",
      roomId: 6,
      checkInDate: "2017-12-25",
      checkOutDate: "2018-01-03"
    },
    {
      id: 5,
      title: "Madam",
      firstName: "Anuradha",
      surname: "Selvam",
      email: "anu@selvam.net",
      roomId: 3,
      checkInDate: "2017-08-30",
      checkOutDate: "2017-10-02"
    }
  ];
  return (
    <table class="table table-striped">
      <thead class="thead-dark">
        <tr scope="col">
          <th>#</th>
          <th>Title</th>
          <th>First Name</th>
          <th>Surname</th>
          <th>Email</th>
          <th>Room ID</th>
          <th>Check-In Date</th>
          <th>Check-Out Date</th>
          <th>Staying</th>
        </tr>
      </thead>
      {FakeBookings.map(customer => (
        <tbody>
          <tr>
            <td>{customer.id}</td>
            <td>{customer.title}</td>
            <td>{customer.firstName}</td>
            <td>{customer.surname}</td>
            <td>{customer.email}</td>
            <td>Room No {customer.roomId}</td>
            <td>{customer.checkInDate}</td>
            <td>{customer.checkOutDate}</td>
            <td>
              <Moment diff={customer.checkInDate} unit="days">
                {customer.checkOutDate}
              </Moment>
            </td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

export default SearchResults;
