import React, { useState, useEffect } from "react";
import moment from "moment";

const SearchResults = props => {
  const [profileID, setProfileID] = useState(null);

  function handleClickProfile(clickedId) {
    setProfileID(clickedId);
  }
  return (
    <div className="table-container">
      <table className="table table-sm">
        <thead className="table-header">
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>First Name</th>
            <th>Sur Name</th>
            <th>Email</th>
            <th>Room ID</th>
            <th>CheckIn Date</th>
            <th>CheckOut Date</th>
            <th>Number of Nights</th>
            <th>Profile</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {props.list.map(obj => {
            return (
              <SearchDetails bookings={obj} handleClick={handleClickProfile} />
            );
          })}
        </tbody>
      </table>
      {profileID && <Profile id={profileID} />}
    </div>
  );
};

const SearchDetails = ({ bookings, handleClick }) => {
  const [selected, setSelected] = useState(false);
  const highlightRow = e => {
    e.target.type != "submit" && setSelected(!selected);
  };
  return (
    <tr className={selected ? "highlight" : ""} onClick={highlightRow}>
      <th key="row">{bookings.id}</th>
      <td>{bookings.title}</td>
      <td>{bookings.firstName}</td>
      <td>{bookings.surname}</td>
      <td>{bookings.email}</td>
      <td>{bookings.roomId}</td>
      <td>{bookings.checkInDate}</td>
      <td>{bookings.checkOutDate}</td>
      <td>
        {moment(bookings.checkOutDate).diff(
          moment(bookings.checkInDate),
          "day"
        )}
      </td>
      <td>
        <button
          className="btn btn-success"
          onClick={() => handleClick(bookings.id)}
        >
          Show profile
        </button>
      </td>
    </tr>
  );
};

const Profile = props => {
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(res => res.json())
      .then(data => {
        setDetailData(data);
      });
  }, [props.id]);
  console.log(detailData);
  return (
    <div className="card-deck p-3 mb-5">
      <ul className="list-group">
        <li className="list-group-item">
          <strong>ID: </strong>
          {detailData.id}
        </li>
        <li className="list-group-item">
          <strong>Title: </strong>
          {detailData.title}
        </li>
        <li className="list-group-item">
          <strong>First Name: </strong>
          {detailData.firstName}
        </li>
        <li className="list-group-item">
          <strong>Surname: </strong>
          {detailData.surname}
        </li>
        <li className="list-group-item">
          <strong>Email: </strong>
          {detailData.email}
        </li>
        <li className="list-group-item">
          <strong>Phone Number: </strong>
          {detailData.phoneNumber}
        </li>
        <li className="list-group-item">
          <strong>Vip: </strong>
          <input type="checkbox" checked={detailData.vip} />
        </li>
      </ul>
    </div>
  );
};

export default SearchResults;
