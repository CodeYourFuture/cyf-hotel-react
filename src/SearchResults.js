import React, { useState } from "react";
import moment from "moment";

const SearchResults = ({ results, setCustomerId, setProfileOn }) => {
  const [selected, setSelected] = useState(null);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSort = (column) => {
    if (column === sortColumn) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortOrder("asc");
    }
  };

  const highlightRow = (id) => {
    setSelected(id === selected ? null : id);
  };

  const sortedBookings = results.slice().sort((a, b) => {
    if (sortColumn === null) {
      return 0;
    }

    const aVal = a[sortColumn];
    const bVal = b[sortColumn];

    if (aVal < bVal) {
      return sortOrder === "asc" ? -1 : 1;
    } else if (aVal > bVal) {
      return sortOrder === "asc" ? 1 : -1;
    } else {
      return 0;
    }
  });

  return (
    <table className="table">
      <thead>
        <tr>
          <th onClick={() => handleSort("title")}>
            Title{" "}
            {sortColumn === "title" && (
              <span>{sortOrder === "asc" ? "▲" : "▼"}</span>
            )}
          </th>
          <th onClick={() => handleSort("firstName")}>
            First Name{" "}
            {sortColumn === "firstName" && (
              <span>{sortOrder === "asc" ? "▲" : "▼"}</span>
            )}
          </th>
          <th onClick={() => handleSort("surname")}>
            Surname{" "}
            {sortColumn === "surname" && (
              <span>{sortOrder === "asc" ? "▲" : "▼"}</span>
            )}
          </th>
          <th onClick={() => handleSort("email")}>
            Email{" "}
            {sortColumn === "email" && (
              <span>{sortOrder === "asc" ? "▲" : "▼"}</span>
            )}
          </th>
          <th onClick={() => handleSort("roomId")}>
            Room ID{" "}
            {sortColumn === "roomId" && (
              <span>{sortOrder === "asc" ? "▲" : "▼"}</span>
            )}
          </th>
          <th onClick={() => handleSort("checkInDate")}>
            Check-In{" "}
            {sortColumn === "checkInDate" && (
              <span>{sortOrder === "asc" ? "▲" : "▼"}</span>
            )}
          </th>
          <th onClick={() => handleSort("checkOutDate")}>
            Check-Out{" "}
            {sortColumn === "checkOutDate" && (
              <span>{sortOrder === "asc" ? "▲" : "▼"}</span>
            )}
          </th>
          <th scope="col">Nights</th>
          <th scope="col">Profiles</th>
        </tr>
      </thead>
      <tbody>
        {sortedBookings.map(
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
            const checkInMoment = moment(checkInDate);
            const checkOutMoment = moment(checkOutDate);
            console.log(checkInMoment);
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
                <td>{checkInMoment.format("YYYY-MM-DD")}</td>
                <td>{checkOutMoment.format("YYYY-MM-DD")}</td>
                <td>{nightCount}</td>
                <td>
                  <button
                    className="btn btn-secondary"
                    onClick={() => {
                      setCustomerId(id);
                      setProfileOn(true);
                    }}
                  >
                    Show Profile
                  </button>
                </td>
              </tr>
            );
          }
        )}
      </tbody>
    </table>
  );
};

export default SearchResults;
