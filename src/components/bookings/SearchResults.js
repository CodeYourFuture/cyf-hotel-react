import React, { useState } from "react";
import CustomerProfile from "../CustomerProfile";

function SearchResults({ bookings }) {
  const [id, setId] = useState(null);

  let cyan = "#42c8f5";
  let white = "white";

  const initialState = { backgroundColor: white, selectedIndex: -1 };
  const [{ backgroundColor, selectedIndex }, setBackGColor] = useState(
    initialState
  );

  function handleColorChange(id) {
    const newColor =
      id === selectedIndex
        ? backgroundColor === white
          ? cyan
          : white
        : cyan;
    setBackGColor({ backgroundColor: newColor, selectedIndex: id });
  }

  function getDifferenceInDays(start, end) {
    const date1 = new Date(start);
    const date2 = new Date(end);

    // One day in milliseconds
    const oneDay = 1000 * 60 * 60 * 24;

    // Calculating the time difference between two dates
    const diffInTime = date2.getTime() - date1.getTime();

    // Calculating the no. of days between two dates
    const diffInDays = Math.round(diffInTime / oneDay);

    return diffInDays;
  }

  // const handleOnClick =

  return (
    <div className="table-responsive">
      <table className="table">
        {/* <caption>List of Customers</caption> */}
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room ID</th>
            <th scope="col">Check in Date</th>
            <th scope="col">Check out Date</th>
            <th scope="col">Number Of Nights</th>
            <th scope="col">Profile</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(data => {
            return (
              <tr
                key={data.id}
                style={
                  data.id === selectedIndex
                    ? { backgroundColor: backgroundColor }
                    : { backgroundColor: white }
                }
                onClick={() => handleColorChange(data.id)}
              >
                <td scope="col">{data.id}</td>
                <td scope="col">{data.title}</td>
                <td scope="col">{data.firstName}</td>
                <td scope="col">{data.surname}</td>
                <td scope="col">{data.email}</td>
                <td scope="col">{data.roomId}</td>
                <td scope="col">{data.checkInDate}</td>
                <td scope="col">{data.checkOutDate}</td>
                <td scope="col">
                  {getDifferenceInDays(data.checkInDate, data.checkOutDate)}
                </td>
                <td scope="col">
                  <button
                    onClick={() => {
                      setId(data.id);
                    }}
                    type="text"
                  >
                    Show Profile
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
      {id ? <CustomerProfile id={id} /> : null}
    </div>
  );
}

export default SearchResults;
