import React, { useState, useEffect } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";

export default function SearchResults(props) {
  const [selectedRow, setSelectedRow] = useState("");
  function selectRow(id) {
    id === selectedRow ? setSelectedRow("") : setSelectedRow(id);
  }

  const [customerProfile, setCustomerProfile] = useState([]);
  useEffect(() => {
    if (selectRow) {
      fetch(`https://cyf-react.glitch.me/customers/${selectedRow}`)
        .then((res) => res.json())
        .then((data) => setCustomerProfile(data));
    }
  }, [selectedRow]);

  const bookingList = props.results.map((element) => (
    <tr
      key={element.id}
      className={element.id === selectedRow ? "table-primary" : ""}
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
      <td scope="col">
        <button onClick={() => selectRow(element.id)}>Show Profile</button>
      </td>
    </tr>
  ));

  return (
    <div className="tableAndCustomerProfile">
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
            <th scope="col">Profiles</th>
          </tr>
        </thead>
        {bookingList}
      </table>
      {/* <CustomerProfile id={selectedRow} /> */}
      {customerProfile && <CustomerProfile profile={customerProfile} />}
    </div>
  );
}
