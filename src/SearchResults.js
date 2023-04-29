import React, { useState } from "react";
import moment from "moment";

const SearchResults = ({ results }) => {
  const [selected, setSelected] = useState(null);
  const highlightRow = (id) => {
    setSelected(id === selected ? null : id);
  };
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room id</th>
          <th scope="col">Check in date</th>
          <th scope="col">Check out date</th>
          <th scope="col">Nights</th>
        </tr>
      </thead>
      <tbody>
        {results.map(
          ({
            id,
            title,
            firstName,
            surname,
            email,
            roomId,
            checkInDate,
            checkOutDate,
          }) => {
            const checkInMoment = moment(checkInDate, "YYYY-MM-DD");
            const checkOutMoment = moment(checkOutDate, "YYYY-MM-DD");
            const nightCount = checkOutMoment.diff(checkInMoment, "days");
            const isSelected = selected === id;

            return (
              <tr
                className={isSelected ? "highlight" : ""}
                onClick={() => highlightRow(id)}
                key={id}
              >
                <td>{title}</td>
                <td>{firstName}</td>
                <td>{surname}</td>
                <td>{email}</td>
                <td>{roomId}</td>
                <td>{checkInDate}</td>
                <td>{checkOutDate}</td>
                <td>{nightCount}</td>
              </tr>
            );
          }
        )}
      </tbody>
    </table>
  );
};

export default SearchResults;
