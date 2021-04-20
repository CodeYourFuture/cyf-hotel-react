import React, { useState } from "react";
import moment from "moment";

const SearchResults = props => {
  const [isActive, setIsActive] = useState(null);

  const toggleActive = i => {
    //Remove the if statement if you don't want to unselect an already selected item
    if (i === isActive) {
      setIsActive(isActive => (isActive = null));
    } else {
      setIsActive(isActive => (isActive = i));
    }
  };
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">First name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room id</th>
          <th scope="col">Check in date</th>
          <th scope="col">Check out date</th>
          <th scope="col">staying</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((result, i) => {
          const {
            id,
            title,
            firstName,
            surname,
            email,
            roomId,
            checkInDate,
            checkOutDate
          } = result;
          var a = moment(checkOutDate);
          var b = moment(checkInDate);
          return (
            <tr
              style={
                isActive === i ? { background: "yellow" } : { background: "" }
              }
              key={id}
              onClick={() => toggleActive(i)}
            >
              <th scope="row">{title}</th>
              <td>{firstName}</td>
              <td>{surname}</td>
              <td>{email}</td>
              <td>{roomId}</td>
              <td>{checkInDate}</td>
              <td>{checkOutDate}</td>
              <td>
                {title} {firstName} has a booking for {a.diff(b, "days")} nights
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
