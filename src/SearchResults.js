import React, { useState } from "react";
import moment from "moment";
import "./SearchResults.css";
const SearchResults = props => {
  const [isSelected, setIsSelected] = useState([]);
  console.log(isSelected);
  const setClassName = id => {
    if (!isSelected.includes(id)) {
      // setIsSelected([...isSelected, id]);
      setIsSelected(isSelected.concat([id]));
    } else {
      setIsSelected(isSelected.filter(p => p !== id));
    }
  };
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>First Name</th>
          <th>Surname</th>
          <th>Email</th>
          <th>Room ID</th>
          <th>Check in date</th>
          <th>Check out date</th>
          <th>Nights</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((booking, index) => {
          return (
            <tr
              key={index}
              onClick={() => setClassName(index)}
              style={
                isSelected.includes(index)
                  ? { backgroundColor: "#0a944f" }
                  : { backgroundColor: "#2c4e64" }
              }
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
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
