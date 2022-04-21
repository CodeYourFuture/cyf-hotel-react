import React, { useState, useEffect } from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
//import ProfileButton from "./ProfileButton";
//import moment from "moment";

export default function SearchResults(props) {
  const headings = [
    "Id",
    "Title",
    "First name",
    "Surname",
    "Email",
    "Room id",
    "Check In Date",
    "Check Out Date",
    "Number Of Nights",
    "Customer profile"
  ];

  const [selectedId, setSelectedId] = useState(null);

  const selectProfile = event => {
    console.log(event.target.value);
    setSelectedId(event.target.value);
  };

  return (
    <div style={{ overflowX: "auto" }}>
      <table className="table table-bordered table-secondary table-sm">
        {/*_____________________table head________________________*/}
        <TableHeader headers={headings} />

        {/*_____________________table body________________________*/}
        <tbody>
          {props.bookings.map((booking, index) => (
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
