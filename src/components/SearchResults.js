import React, { useState } from "react";
import moment from "moment";

const SearchResults = ({ results }) => {
  const [selectRow, setSelectRow] = useState({
    activeRow: null
  });

  const toggleActive = index => {
    setSelectRow({ activeRow: index });
  };

  const toggleActiveStyle = index => {
    if (index === selectRow.activeRow) {
      return "purple";
    }
  };
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">First name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room id</th>
            <th scope="col">Check-in Date</th>
            <th scope="col">Check-out Date</th>
            <th scope="col">Number of Nights</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <tr
              className={toggleActiveStyle(index)}
              key={index}
              onClick={() => toggleActive(index)}
            >
              <th scope="row">{result.id}</th>
              <td>{result.title}</td>
              <td>{result.firstName}</td>
              <td>{result.surname}</td>
              <td>{result.email}</td>
              <td>{result.roomId}</td>
              <td>{result.checkInDate}</td>
              <td>{result.checkOutDate}</td>
              <td>
                {moment(result.checkOutDate).diff(
                  moment(result.checkInDate),
                  "days"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
