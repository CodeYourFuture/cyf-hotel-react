import moment from "moment";
import React, { useState } from "react";
import CustomerProfile from "./CustomerProfile";

const SearchResults = props => {
  const { bookings } = props;

  const [selectedRowId, setSelectedRowId] = useState(null);

  const handlerRowClick = id => {
    id === selectedRowId ? setSelectedRowId(null) : setSelectedRowId(id);
  };

  const [showProfile, setShowProfile] = useState(null);

  const handlerShowProfileClick = id => {
    setShowProfile(id);
  };

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>First Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Room ID</th>
            <th>Check in Date</th>
            <th>Check out Date</th>
            <th>Nights of Stay</th>
            <th>
              <button>Show profile</button>
            </th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(booking => (
            <tr
              key={booking.id}
              onClick={() => handlerRowClick(booking.id)}
              style={{
                backgroundColor: selectedRowId === booking.id ? "red" : "white"
              }}
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
                {moment(booking.checkOutDate).diff(booking.checkInDate, "days")}
              </td>
              <td>
                <button onClick={() => handlerShowProfileClick(booking.id)}>
                  Show Profile
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showProfile && <CustomerProfile b={showProfile} />}
    </div>
  );
};

export default SearchResults;
