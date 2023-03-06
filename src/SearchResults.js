import React, { useState } from "react";
import moment from "moment";

const SearchResults = () => {
  const [selectedRows, setSelectedRows] = useState([]);

  const handleRowClick = (bookingId) => {
    setSelectedRows((prevState) => {
      if (prevState.includes(bookingId)) {
        return prevState.filter((id) => id !== bookingId);
      } else {
        return [...prevState, bookingId];
      }
    });
  };
  // Example booking data
  const bookings = [
    {
      id: 1,
      title: "Mr",
      firstName: "person1",
      surname: "else",
      email: "johndoe@example.com",
      roomId: 101,
      checkInDate: "2023-03-10",
      checkOutDate: "2023-03-15",
    },
    {
      id: 2,
      title: "Ms",
      firstName: "person2",
      surname: "else",
      email: "janedoe@example.com",
      roomId: 102,
      checkInDate: "2023-03-12",
      checkOutDate: "2023-03-14",
    },
    {
      id: 3,
      title: "Mr",
      firstName: "person3",
      surname: "else",
      email: "johndoe@example.com",
      roomId: 103,
      checkInDate: "2023-05-20",
      checkOutDate: "2023-06-15",
    },
    {
      id: 4,
      title: "Mr",
      firstName: "person4",
      surname: "else",
      email: "johndoe@example.com",
      roomId: 104,
      checkInDate: "2023-03-10",
      checkOutDate: "2023-03-15",
    },
    {
      id: 5,
      title: "Mrs",
      firstName: "person5",
      surname: "else",
      email: "johndoe@example.com",
      roomId: 105,
      checkInDate: "2023-04-09",
      checkOutDate: "2023-04-15",
    },
  ];

  const renderBookingRows = () => {
    return bookings.map((booking) => {
      const {
        id,
        title,
        firstName,
        surname,
        email,
        roomId,
        checkInDate,
        checkOutDate,
      } = booking;
      const numNights = moment(checkOutDate).diff(moment(checkInDate), "days");

      // Check if the current row is selected
      const isSelected = selectedRows.includes(id);

      // Set the row class based on the selected state
      const rowClass = isSelected ? "table-active" : "";

      return (
        <tr key={id} className={rowClass} onClick={() => handleRowClick(id)}>
          <td>{id}</td>
          <td>{title}</td>
          <td>{firstName}</td>
          <td>{surname}</td>
          <td>{email}</td>
          <td>{roomId}</td>
          <td>{checkInDate}</td>
          <td>{checkOutDate}</td>
          <td>{numNights}</td>
        </tr>
      );
    });
  };

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>First Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Room ID</th>
            <th>Check In Date</th>
            <th>Check Out Date</th>
            <th># Nights</th>
          </tr>
        </thead>
        <tbody>{renderBookingRows()}</tbody>
      </table>
    </div>
  );
};

export default SearchResults;


/**
 * added a new state variable selectedRows using the useState hook. This variable is an array of 
 * booking IDs representing the currently selected rows.
 * 
 * Also added a new handleRowClick function which toggles the selected state of a row when it is clicked. 
 * It does this by checking if the booking ID is already in the selectedRows array. If it is, it removes 
 * the ID from the array. If it is not, it adds the ID to the array.
 * 
 * I have updated the renderBookingRows function to set the className prop of each row based on whether

 */