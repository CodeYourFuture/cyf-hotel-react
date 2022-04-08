import React, { useState } from "react";
import moment from "moment";

const SearchResults = ({ ret }) => {
  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>FirstName</th>
            <th>Surname</th>
            <th>Email</th>
            <th>RoomID</th>
            <th>CheckInDate</th>
            <th>CheckOutDate</th>
            <th>NumberOfNights</th>
          </tr>
        </thead>
        <tbody>
          {ret.FakeBookings.map(detail => {
            return <SearchDetails details={detail} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

const SearchDetails = ({ details }) => {
  const [isSelected, setSelected] = useState(false);
  const highlightRow = () => setSelected(!isSelected);
  return (
    <tr className={isSelected ? "selected" : ""} onClick={highlightRow}>
      <th scope="row">{details.id}</th>
      <td>{details.title}</td>
      <td>{details.firstName}</td>
      <td>{details.surname}</td>
      <td>{details.email}</td>
      <td>{details.roomId}</td>
      <td>{details.checkInDate}</td>
      <td>{details.checkOutDate}</td>
      <td>
        {moment(details.checkOutDate).diff(moment(details.checkInDate), "day")}
      </td>
    </tr>
  );
};

export default SearchResults;
