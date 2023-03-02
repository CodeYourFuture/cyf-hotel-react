import React, { useState } from "react";
import moment from "moment";

function SearchResults(props) {
  const searchResults = props.results.filter(value => {
    return (
      value.firstName.toLowerCase().includes(props.searchInput.toLowerCase()) ||
      value.surname.toLowerCase().includes(props.searchInput.toLowerCase())
    );
  });
  //   console.log(searchResults);

  const [selectRow, setSelectRow] = useState([]);

  const handleRowClick = bookingDetails => {
    const SelectedRows = [...selectRow];
    if (SelectedRows.includes(bookingDetails)) {
      setSelectRow(SelectedRows.filter(eachRow => eachRow !== bookingDetails));
    } else {
      SelectedRows.push(bookingDetails);
      setSelectRow(SelectedRows);
    }
  };

  function CustomerProfile(e, id) {
    console.log(id);
    console.log(props.results.find(result => result.id == id));
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Booking ID</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room ID</th>
          <th scope="col">Check in date</th>
          <th scope="col">Check out date</th>
          <th scope="col">Number of nights</th>
          <th scope="col">Customer Profile</th>
        </tr>
      </thead>
      <tbody>
        {searchResults.map((detail, index) => (
          <tr
            key={detail.id}
            onClick={() => handleRowClick(index)}
            className={selectRow.includes(index) ? "SelectedRows" : ""}
          >
            <td>{detail.id}</td>
            <td>{detail.title}</td>
            <td>{detail.firstName}</td>
            <td>{detail.surname}</td>
            <td>{detail.email}</td>
            <td>{detail.roomId}</td>
            <td>{detail.checkInDate}</td>
            <td>{detail.checkOutDate}</td>
            <td>
              {moment(detail.checkOutDate).diff(detail.checkInDate, "days")}
            </td>
            <td>
              <button
                className="btn btn-primary"
                onClick={() => props.setCustomerProfile(detail.id)}
              >
                Show Profile
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SearchResults;
