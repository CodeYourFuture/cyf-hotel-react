import moment from "moment";
import React, { useState } from "react";
import CustomerProfile from "./CustomerProfile";
function SearchResults({ results }) {
  let [selectedId, setSelectedId] = useState("");

  const idFunction = e => {
    let id = e.target.parentElement.parentElement.childNodes[0].textContent;
    selectedId = parseInt(id, 10);
    setSelectedId(selectedId);
  };

  function rowHighlight(e) {
    if (e.target.parentElement.style.backgroundColor === "yellow") {
      e.target.parentElement.style.backgroundColor = "white";
    } else {
      e.target.parentElement.style.backgroundColor = "yellow";
    }
  }

  return (
    <div className="table-responsive{-sm|-md|-lg|-xl} table-bordered container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room Id</th>
            <th scope="col">Check In Date</th>
            <th scope="col">Check Out Date</th>
            <th scope="col">Number of Nights</th>
          </tr>
        </thead>
        <tbody id="display-table">
          {results.map((item, index) => {
            var a = moment(item.checkOutDate);
            var b = moment(item.checkInDate);
            return (
              <tr onClick={rowHighlight} key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.firstName}</td>
                <td>{item.surname}</td>
                <td>{item.email}</td>
                <td>{item.roomId}</td>
                <td>{item.checkInDate}</td>
                <td>{item.checkOutDate}</td>
                <td>{a.diff(b, "day")}</td>
                <tr>
                  <button className="btn btn-primary" onClick={idFunction}>
                    Show Profile
                  </button>
                </tr>
              </tr>
            );
          })}
        </tbody>
      </table>
      {selectedId && <CustomerProfile getId={selectedId} />}
    </div>
  );
}
export default SearchResults;
