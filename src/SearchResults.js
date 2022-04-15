import React, { useState, useEffect } from "react";
import moment from "moment";

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

  const [selectedId, setSelectedId] = useState();

  const selectProfile = event => {
    setSelectedId(event.target.value);
    console.log(event.target.value);
  };

  const [selected, setSelected] = useState(false);

  const selectRow = () => setSelected(!selected);

  return (
    <div style={{ overflowX: "auto" }}>
      <table className="table table-bordered border-primary table-secondary table-sm">
        {/*_____________________table head________________________*/}

        <TableHeader headers={headings} />

        {/*_____________________table body________________________*/}
        <tbody>
          {props.bookings.map((booking, index) => {
            return (
              <tr
                className={selected ? "table" : null}
                onClick={selectRow}
                key={index}
              >
                <th key={index} scope="row">
                  {booking.id}
                </th>
                <td>{booking.title}</td>
                <td>{booking.firstName}</td>
                <td>{booking.surname}</td>
                <td>{booking.email}</td>
                <td>{booking.roomId}</td>
                <td>{booking.checkInDate}</td>
                <td>{booking.checkOutDate}</td>
                <td>
                  {moment(booking.checkOutDate).diff(
                    moment(booking.checkInDate),
                    "days"
                  )}
                </td>

                <td>
                  <ProfileButton
                    id={booking.id}
                    selectProfile={selectProfile}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {selectedId && <CustomerProfile id={selectedId} />}
    </div>
  );
}

//const CustomerProfile = (props) => `Costumer ${props.id}`;

const ProfileButton = props => {
  return (
    <button
      className="btn btn-secondary"
      value={props.id}
      onClick={props.selectProfile}
    >
      Profile
    </button>
  );
};

const TableHeader = ({ headers }) => (
  <thead className="search-result-table-head">
    <tr>
      {headers.map((heading, index) => {
        return (
          <th key={heading} scope="col">
            {heading}
          </th>
        );
      })}
    </tr>
  </thead>
);

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
