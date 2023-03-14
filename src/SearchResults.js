import moment from "moment";
import React, { useEffect, useState } from "react";
import CustomerProfile from "./CustomerProfile";

const SearchResults = props => {
  const [selectedRowId, setSelectedRowId] = useState(null);
  const handlerRowClick = id => {
    id === selectedRowId ? setSelectedRowId(null) : setSelectedRowId(id);
  };

  const [showProfile, setShowProfile] = useState(null);
  const handlerShowProfileClick = id => {
    setShowProfile(id);
  };

  const [column, setColumn] = useState("");
  const [bookingsArray, setBookingsArray] = useState(props.booking);

  const [sortDirection, setSortDirection] = useState("asc");

  const handelSort = col => {
    setColumn(col);
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    setBookingsArray(sortedArray);
  };
  useEffect(() => {
    setBookingsArray(props.booking);
  }, [props.booking]);

  const sortedArray = bookingsArray.sort((a, b) => {
    let chosenDirection = 0;
    sortDirection === "asc" ? (chosenDirection = 1) : (chosenDirection = -1);
    if (column === "id") {
      return chosenDirection * (a.id - b.id);
    } else if (column === "title") {
      return chosenDirection * a.title.localeCompare(b.title);
    } else if (column === "firstName") {
      return chosenDirection * a.firstName.localeCompare(b.firstName);
    } else if (column === "surname") {
      return chosenDirection * a.surname.localeCompare(b.surname);
    } else if (column === "email") {
      return chosenDirection * a.email.localeCompare(b.email);
    } else if (column === "roomId") {
      return chosenDirection * (a.roomId - b.roomId);
    } else if (column === "checkInDate") {
      return (
        chosenDirection * (new Date(a.checkInDate) - new Date(b.checkInDate))
      );
    } else if (column === "checkOutDate") {
      return (
        chosenDirection * (new Date(a.checkOutDate) - new Date(b.checkOutDate))
      );
    } else if (column === "stay") {
      return (
        chosenDirection *
        (new Date(a.checkOutDate) -
          new Date(a.checkInDate) -
          (new Date(b.checkOutDate) - new Date(b.checkInDate)))
      );
    } else {
      return 0;
    }
  });

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th onClick={() => handelSort("id")}>ID</th>
            <th onClick={() => handelSort("title")}>Title</th>
            <th onClick={() => handelSort("firstName")}>First Name</th>
            <th onClick={() => handelSort("surname")}>Surname</th>
            <th onClick={() => handelSort("email")}>Email</th>
            <th onClick={() => handelSort("roomId")}>Room ID</th>
            <th onClick={() => handelSort("checkInDate")}>Check in Date</th>
            <th onClick={() => handelSort("checkOutDate")}>Check out Date</th>
            <th onClick={() => handelSort("stay")}>Nights of Stay</th>
            <th>
              <button>Show profile</button>
            </th>
          </tr>
        </thead>
        <tbody>
          {bookingsArray.map(booking => (
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
