import React, { useState } from "react";
import moment from "moment";
import Modal from "./UIElements/Modal";

const SearchResults = ({
  results,
  setCustomerId,
  setProfileOn,
  deleteFunc,
}) => {
  const [selected, setSelected] = useState({ id: "", isSelected: false });
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [modalActive, setModalActive] = useState(false);

  const handleSort = (column) => {
    if (column === sortColumn) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortOrder("asc");
    }
  };

  const handleClick = () => {
    setModalActive(true);
  };

  const highlightRow = (id) => {
    if (id === selected.id) {
      setSelected({ ...selected, isSelected: !selected.isSelected });
    } else {
      setSelected({ id: id, isSelected: true });
    }
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
    <>
      <div className="table-wrapper">
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
              <th scope="col"></th>
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
                const nightCount = checkOutMoment.diff(checkInMoment, "days");
                const isSelected = selected.id === id && selected.isSelected;

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
                        Profile
                      </button>
                    </td>
                    <td>
                      {isSelected && <button onClick={handleClick}>X</button>}
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </div>
      {modalActive && (
        <Modal
          closeModal={setModalActive}
          deleteFunc={deleteFunc}
          bookingId={selected.id}
        />
      )}
    </>
  );
};

export default SearchResults;
