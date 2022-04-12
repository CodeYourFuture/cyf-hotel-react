import React, { useState, useEffect } from "react";
import moment from "moment";

const CalculateNumberOfNights = (inDate, outDate) => {
  let a = moment(inDate);
  let b = moment(outDate);
  return b.diff(a, "days");
};

const TableRow = ({ booking, handleClick }) => {
  const [selected, setSelected] = useState(false);
  return (
    <tr
      onClick={() => {
        setSelected(!selected);
      }}
      className={selected ? "selected" : ""}
    >
      <td>{booking.title}</td>
      <td>{booking.firstName}</td>
      <td>{booking.surname}</td>
      <td>{booking.email}</td>
      <td>{booking.roomId}</td>
      <td>{booking.checkInDate}</td>
      <td>{booking.checkOutDate}</td>
      <td>
        {CalculateNumberOfNights(booking.checkInDate, booking.checkOutDate)}
      </td>
      <td>
        <button
          className="btn btn-primary"
          onClick={e => {
            e.stopPropagation();
            handleClick(booking.id);
          }}
        >
          Show profile
        </button>
      </td>
    </tr>
  );
};

const SearchResults = ({ results }) => {
  const [customerId, setCustomerId] = useState(null);
  const handleButtonClick = clickedId => {
    setCustomerId(clickedId);
  };
  return (
    <div>
      <table className="table container">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room Id</th>
            <th scope="col">Check In Date</th>
            <th scope="col">Check-Out Date</th>
            <th scope="col">Nights</th>
            <th scope="col">Profile</th>
          </tr>
        </thead>
        <tbody>
          {results.map(booking => {
            return (
              <TableRow
                booking={booking}
                handleClick={handleButtonClick}
                key={booking.id}
              />
            );
          })}
        </tbody>
      </table>
      {customerId && <CustomerProfile id={customerId} />}
    </div>
  );
};

const CustomerProfile = ({ id }) => {
  const [customerProfile, setCustomerProfile] = useState({});
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then(res => res.json())
      .then(data => setCustomerProfile(data));
  }, [id]);
  return (
    <ul className="card">
      <li>Customer ID: {id}</li>
      <li>Email: {customerProfile.email}</li>
      {customerProfile.vip && <li>Customer VIP</li>}
      <li>Tel: {customerProfile.phoneNumber}</li>
    </ul>
  );
};
export default SearchResults;
