import React, { useState, useEffect } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";

const SearchResults = ({ results }) => {
  
 const [selectedId, setSelectedId] = useState("");
 const [isLoading, setIsLoading] = useState(true);
 const [error, setError] = useState(null);
 const [bookings, setBookings] = useState([]);

 const handleRowClick = (id) => {
    setSelectedId(
      id === selectedId 
      ?  ""
      : id);
  };
  
  useEffect(() => {
    setIsLoading(true);
    fetch("https://cyf-react.glitch.me/delayed")
    // fetch("https://cyf-react.glitch.me/error")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setBookings(data);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Failed to load data from the server. Please try again later.</p>;
  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>First Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Room ID</th>
            <th>Check-in Date</th>
            <th>Check-out Date</th>
            <th>Numb days</th>
            <th>Profile</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr
              key={booking.id}
              className=
              {
              booking.id === selectedId 
              ? "selected" 
              : ""
              }
              onClick={() => handleRowClick(booking.id)}
            >
              <td>{booking.id}</td>
              <td>{booking.title}</td>
              <td>{booking.firstName}</td>
              <td>{booking.surname}</td>
              <td>{booking.email}</td>
              <td>{booking.roomId}</td>
              <td>{booking.checkInDate}</td>
              <td>{booking.checkOutDate}</td>
              <td>
                {moment(booking.checkOutDate).diff(
                  booking.checkInDate,
                  "days"
                )}
              </td>
              <td><button>Show profile</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedId && <CustomerProfile id={selectedId} />}
    </>
  );
};

export default SearchResults;