import moment from "moment";
import React, { useState } from "react";
import CustomerProfile from "./CustomerProfile";

const SearchResults = ({ results }) => {
  const [selected, setSelected] = useState(null);
  const [select, setSelect] = useState(null);

  function handleClick(event, bookId) {
    event.target.name === "button"
      ? select !== bookId
        ? setSelect(bookId)
        : setSelect(null)
      : selected !== bookId
      ? setSelected(bookId)
      : setSelected(null);
  }

  function handleClose() {
    setSelect(null);
  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room ID</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
            <th scope="col">No. Nights</th>
            <th scope="col">Customer Profile</th>
          </tr>
        </thead>
        <tbody>
          {results.map((book, index) => {
            return (
              <tr
                key={book.id}
                onClick={event => handleClick(event, book.id)}
                className={"".concat(selected === book.id ? "highlight" : "")}
              >
                <th scope="row">{index + 1}</th>
                <td>{book.title}</td>
                <td>{book.firstName}</td>
                <td>{book.surname}</td>
                <td>{book.email}</td>
                <td>{book.roomId}</td>
                <td>{book.checkInDate}</td>
                <td>{book.checkOutDate}</td>
                <td>
                  {moment(book.checkOutDate).diff(
                    moment(book.checkInDate),
                    "days"
                  )}
                </td>
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
      {select && <CustomerProfile id={select} handleClose={handleClose} />}
    </>
  );
};

export default SearchResults;
