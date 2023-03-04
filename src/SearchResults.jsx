import React, { useState } from "react";
import moment from "moment";

export default function SearchResults(props) {
<<<<<<< HEAD
  const [selectedRow, setSelectedRow] = useState("");
  function selectRow(id) {
    id === selectedRow ? setSelectedRow("") : setSelectedRow(id);
=======
  const [selectedRow, setSelectedRow] = useState(false);

  function selectRow() {
    setSelectedRow((selectedRow) =>
      selectedRow === false ? "table-dark" : false
    );
>>>>>>> 3195d35893606e0f7f232b97dc860b6992137607
  }

  const bookingList = props.results.map((element) => (
    <tr
      key={element.id}
      className={element.id === selectedRow ? "table-primary" : ""}
      onClick={() => selectRow(element.id)}
    >
      <td>{element.id}</td>
      <td>{element.title}</td>
      <td>{element.firstName}</td>
      <td>{element.surname}</td>
      <td>{element.email}</td>
      <td>{element.roomId}</td>
      <td>{element.checkInDate}</td>
      <td>{element.checkOutDate}</td>
      <td>
        {moment(element.checkOutDate).diff(moment(element.checkInDate), "days")}
      </td>
    </tr>
  ));

  return (
    <table class="table table-borderless ">
      <thead class="thead-light">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room ID</th>
          <th scope="col">Check-in Date</th>
          <th scope="col">Check-out Date</th>
          <th scope="col">No. of Nights</th>
        </tr>
      </thead>
      {bookingList}
    </table>
  );
}
