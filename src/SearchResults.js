import CustomerProfile from "./CustomerProfile";
import React, { useState } from "react";
import moment from "moment";

const TableRow = ({ booking, handleShowProfile }) => {
  const [isSelected, setIsSelected] = useState(false);

  const toggleHighlight = () => {
    setIsSelected(!isSelected);
  };

  const highlightClass = isSelected ? "highlight" : "";

  return (
    <tr onClick={toggleHighlight} className={highlightClass}>
      <th scope="row">{booking.id}</th>
      <td>{booking.title}</td>
      <td>{booking.firstName}</td>
      <td>{booking.surname}</td>
      <td>{booking.email}</td>
      <td>{booking.roomId}</td>
      <td>{booking.checkInDate}</td>
      <td>{booking.checkOutDate}</td>
      <td>{moment(booking.checkOutDate).diff(booking.checkInDate, "days")}</td>
      <td>
        <button onClick={() => handleShowProfile(booking.id)} className="btn btn-primary">
          Show profile
        </button>
      </td>
    </tr>
  );
};





const SearchResults = (props) => {
  const [customerId, setCustomerId] = useState(null);
  const handleShowProfile = (customerId) => {
    setCustomerId(customerId);
  };
  const handleCloseProfile = () => {
    setCustomerId(null);
  };
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">First name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room ID</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
            <th scope="col">Nights</th>
            <th scope="col">Customer Profile</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((booking) => (
            <TableRow key={booking.id} booking={booking} handleShowProfile={handleShowProfile} />
          ))}
        </tbody>
      </table>
      {customerId && (
      <>
      <button onClick={handleCloseProfile}>Close</button>
      <CustomerProfile id={customerId}/>
      </> )}
    </div>
  );
};



export default SearchResults;