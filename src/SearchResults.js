import React, { useState } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";

const SearchResults = ({ results }) => {
  const [id, setId] = useState(null);
  const handleSetId = c_id => {
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
            return <SearchDetails info={detail} handleClick={handleSetId} />;
          })}
        </tbody>
      </table>
      {id && <CustomerProfile customerId={id} />}
    </div>
  );
};

const SearchDetails = ({ info, handleClick }) => {
  const [isSelected, setSelected] = useState(false);
  const highlightRow = () => setSelected(!isSelected);

  return (
    <tr className={isSelected ? "selected" : ""} onClick={highlightRow}>
      <th scope="row">{info.id}</th>
      <td>{info.title}</td>
      <td>{info.firstName}</td>
      <td>{info.surname}</td>
      <td>{info.email}</td>
      <td>{info.roomId}</td>
      <td>{info.checkInDate}</td>
      <td>{info.checkOutDate}</td>
      <td>{moment(info.checkOutDate).diff(moment(info.checkInDate), "day")}</td>
      <td>
        <button
          className="btn btn-success"
          onClick={() => handleClick(info.id)}
        >
          Show profile
        </button>
      </td>
    </tr>
  );
};

export default SearchResults;
