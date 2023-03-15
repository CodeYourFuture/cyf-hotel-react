import moment from "moment";
import React, { useState } from "react";
import CustomerProfile from "./CustomerProfile";
const SearchResults = ({ results }) => {
  const [isClicked, setIsClicked] = useState(false);
   const [selectedId, setSelectedId] = useState(null);
  function handleClick(event) {
    event.preventDefault();
    props.handleClick(props.data.id);
  }
  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">id</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room id</th>
          <th scope="col">Check in date</th>
          <th scope="col">Check out date</th>
          <th scope="col">nights</th>
          <th scope="col">Profiles</th>
        </tr>
      </thead>
      <tbody>
        {results &&
          results.map((booking) => {
            return (
              <tr
                key={booking.id}
                onClick={() => {
                  setIsClicked(!isClicked);
                }}
                style={isClicked ? { border: "4px solid red" } : {}}
              >
                <td>{booking.id}</td>
                <td>{booking.title}</td>
                <td>{booking.firstName}</td>
                <td>{booking.surname}</td>
                <td>{booking.email}</td>
                <td>{booking.roomId}</td>
                <td>{booking.checkInDate}</td>
                <td>{booking.checkOutDate}</td>
                {/* <th scope="col">Profiles</th> */}
                <td>
                  {moment(booking.checkOutDate).diff(
                    booking.checkInDate,
                    "days"
                  )}
                </td>
                <td>
                  <button className="btn btn-primary" onClick={handleClick}>
                    Show Profile
                  </button>
                </td>
              </tr>
            );
          })}
      </tbody>
      {selectedId && <CustomerProfile customerId={selectedId} />}
    </table>
  );
};
export default SearchResults;