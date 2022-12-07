import React, { useState } from "react";
import Moment from "react-moment";
import "moment-timezone";

const SearchResults = prop => {
  const [isSelected, setSelect] = useState();

  const clicked = () => {
    setSelect(!isSelected);
  };

  //setSelect(oldIsSelected => !oldIsSelected)// this will change the value forth and back from now and before

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
      {prop.bookings.map(customer => (
        <tbody
          onClick={clicked}
          style={{
            backgroundColor: isSelected ? "lightblue" : null
          }}
        >
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
