import React, { useState } from "react";
import Moment from "react-moment";
import CustomerProfile from "./CustomerProfile";

const SearchResults = ({ searchResultBookings }) => {
  const [selectedId, setSelectedId] = useState(null);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Room id</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
            <th scope="col">Nights</th>
          </tr>
        </thead>
        <SearchTable
          searchTableBooking={searchResultBookings}
          setSelectedId={setSelectedId}
        />
      </table>
      {selectedId && <CustomerProfile id={selectedId} />}
    </div>
  );
};

const SearchTable = ({ searchTableBooking, setSelectedId }) => {
  return (
    <tbody>
      {searchTableBooking.map((item, index) => (
        <BookingRow key={index} item={item} setSelectedId={setSelectedId} />
      ))}
    </tbody>
  );
};

const BookingRow = ({ item, index, setSelectedId }) => {
  const [active, setActive] = useState(false);
  function makeItActive() {
    setActive(!active);
  }
  return (
    <tr
      key={index}
      className={active ? "activeRow" : ""}
      onClick={makeItActive}
    >
      <td>{item.title}</td>
      <td>{item.firstName}</td>
      <td>{item.surname}</td>
      <td>{item.email}</td>
      <td>{item.id}</td>
      <td>
        <Moment format="DD-MM-YYYY">{item.checkInDate}</Moment>
      </td>
      <td>
        <Moment format="DD-MM-YYYY">{item.checkOutDate}</Moment>
      </td>
      <td>
        <Moment diff={item.checkInDate} unit="days">
          {item.checkOutDate}
        </Moment>
      </td>
      <td>
        <button onClick={() => setSelectedId(item.id)}>Show profile</button>
      </td>
    </tr>
  );
};

export default SearchResults;
