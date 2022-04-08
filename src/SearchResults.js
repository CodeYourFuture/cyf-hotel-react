import React, { useState } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";

const SearchResults = ({ results }) => {
  const [id, setId] = useState(null);
  const handleSetId = c_id => {
    // console.log(`Id handleSetID: ${c_id}`);
    setId(c_id);
  };
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
            <th>Profile</th>
          </tr>
        </thead>
        <tbody>
          {results.map(detail => {
            return <SearchDetails details={detail} handleClick={handleSetId} />;
          })}
        </tbody>
      </table>
      {id && <CustomerProfile customerId={id} />}
    </div>
  );
};

const SearchDetails = ({ details, handleClick }) => {
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
      <td>
        <button onClick={() => handleClick(details.id)}>Show profile</button>
      </td>
    </tr>
  );
};

export default SearchResults;
