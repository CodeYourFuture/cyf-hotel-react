import moment from "moment";
import React, { useState } from "react";
import CustomerProfile from "./CustomerProfile";

const SearchResults = ({ results }) => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectButton, setSelectButton] = useState(null);
  const [sort, setSort] = useState(1);
  const [sortColumn, setSortColumn] = useState("order");

  function handleClick(event, bookId) {
    event.target.name === "button"
      ? setSelectButton(selectButton === bookId ? null : bookId)
      : setSelectedRow(selectedRow === bookId ? null : bookId);
  }

  function handleClose() {
    setSelectButton(null);
  }
  const [sortDirection, setSortDirection] = useState("⇓");
  function handleSorting(event) {
    setSort(sort * -1);
    setSortColumn(event.target.id);
    setSortDirection(sortDirection === "⇓" ? "⇑" : "⇓");
  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col" id="order" onClick={handleSorting}>
              ID{sortColumn === "order" && sortDirection}
            </th>
            <th scope="col" id="title" onClick={handleSorting}>
              Title{sortColumn === "title" && sortDirection}
            </th>
            <th scope="col" id="firstName" onClick={handleSorting}>
              First Name{sortColumn === "firstName" && sortDirection}
            </th>
            <th scope="col" id="surname" onClick={handleSorting}>
              Surname{sortColumn === "surname" && sortDirection}
            </th>
            <th scope="col" id="email" onClick={handleSorting}>
              Email{sortColumn === "email" && sortDirection}
            </th>
            <th scope="col" id="roomId" onClick={handleSorting}>
              Room ID{sortColumn === "roomId" && sortDirection}
            </th>
            <th scope="col" id="checkInDate" onClick={handleSorting}>
              Check in date
              {sortColumn === "checkInDate" && sortDirection}
            </th>
            <th scope="col" id="checkOutDate" onClick={handleSorting}>
              Check out date
              {sortColumn === "checkOutDate" && sortDirection}
            </th>
            <th scope="col" id="nights" onClick={handleSorting}>
              No. Nights{sortColumn === "nights" && sortDirection}
            </th>
            <th scope="col" id="order" onClick={handleSorting}>
              Customer Profile
            </th>
          </tr>
        </thead>
        <tbody>
          {results
            .map((book, index) => {
              book.order = index + 1;
              book.nights =
                moment(book.checkOutDate).diff(
                  moment(book.checkInDate),
                  "days"
                ) || "-";
              return book;
            })
            .sort((a, b) => {
              return +a[sortColumn]
                ? sort * a[sortColumn] - sort * b[sortColumn]
                : a[sortColumn].toUpperCase() < b[sortColumn].toUpperCase()
                ? sort * -1
                : a[sortColumn].toUpperCase() > b[sortColumn].toUpperCase()
                ? sort * 1
                : 0;
            })
            .map(book => {
              return (
                <tr
                  key={book.id}
                  onClick={event => handleClick(event, book.id)}
                  className={selectedRow === book.id ? "highlight" : undefined}
                >
                  <th scope="row">{book.order}</th>
                  <td>{book.title}</td>
                  <td>{book.firstName}</td>
                  <td>{book.surname}</td>
                  <td>{book.email}</td>
                  <td>{book.roomId}</td>
                  <td>{book.checkInDate || "-"}</td>
                  <td>{book.checkOutDate || "-"}</td>
                  <td>{book.nights}</td>
                  <td>
                    <button
                      name="button"
                      onClick={event => handleClick(event, book.id)}
                    >
                      Show Profile
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      {selectButton && (
        <CustomerProfile id={selectButton} handleClose={handleClose} />
      )}
    </>
  );
};

export default SearchResults;
