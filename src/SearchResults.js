import React, { useState, useEffect } from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
//import ProfileButton from "./ProfileButton";
//import moment from "moment";

export default function SearchResults(props) {
  const headings = [
    { title: "Id", target: "id" },
    { title: "Title", target: "title" },
    { title: "First name", target: "firstName" },
    { title: "Surname", target: "surname" },
    { title: "Email", target: "email" },
    { title: "Room id", target: "roomId" },
    { title: "Check In Date", target: "checkInDate" },
    { title: "Check Out Date", target: "checkOutDate" },
    { title: "Number Of Nights" },
    { title: "Customer profile" }
  ];

  const [selectedId, setSelectedId] = useState(null);

  const selectProfile = event => {
    //console.log(event.target.value);
    setSelectedId(event.target.value);
  };

  const [ascending, setAscending] = useState(true);
  const [sortedBookings, setSortedBookings] = useState(null);

  function sortBookings(propToSortBy) {
    const sortCol = [...props.bookings].sort((a, b) => {
      let result = a[propToSortBy]
        .toString()
        .localeCompare(b[propToSortBy].toString(), {});
      if (ascending === false) {
        result = result * -1;
      }
      return result;
    });
    setAscending(!ascending);
    setSortedBookings(sortCol);
  }

  return (
    <div style={{ overflowX: "auto" }}>
      <table className="table table-bordered table-secondary table-sm">
        {/*_____________________table head________________________*/}
        <TableHeader headers={headings} sortBookings={sortBookings} />
        {/*_____________________table body________________________*/}
        <tbody>
          {(sortedBookings || props.bookings).map((booking, index) => (
            <TableRow
              booking={booking}
              selectProfile={selectProfile}
              key={index}
            />
          ))}
        </tbody>
      </table>
      {selectedId && <CustomerProfile id={selectedId} />}
    </div>
  );
}

//const CustomerProfile = (props) => `Costumer ${props.id}`;

const CustomerProfile = props => {
  const [customerProfile, setCustomerProfile] = useState({});

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(res => res.json())
      .then(data => setCustomerProfile(data));
  }, [props.id]);

  return (
    <ul className="card">
      <li>
        <b>Customer {props.id} profile</b>
      </li>
      <li>Email: {customerProfile.email}</li>
      {customerProfile.vip && <li>VIP</li>}
      <li>Tel: {customerProfile.phoneNumber}</li>
    </ul>
  );
};
