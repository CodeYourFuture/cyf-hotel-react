import React, { useState } from "react";
import moment from "moment";

const SearchResults = ({ results }) => {
  const [selectedRows, setSelectedRows] = useState([]);

  const highlighted = id => {
    selectedRows.includes(id)
      ? setSelectedRows(selectedRows.filter(el => el !== id))
      : setSelectedRows(selectedRows.concat(id));
  };

  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">First name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room id</th>
          <th scope="col">Check in date</th>
          <th scope="col">Check out date</th>
          <th scope="col">No. of nights</th>
        </tr>
      </thead>
      <tbody>
        {results.map(el => (
          <tr
            key={el.id}
            onClick={() => {
              highlighted(el.id);
            }}
            className={selectedRows.includes(el.id) ? "select" : "unSelect"}
          >
            {Object.values(el).map((item, index) => (
              <td key={index}>{item}</td>
            ))}
            <td key={Object.keys(el).length - 1}>
              {moment(el.checkOutDate).diff(moment(el.checkInDate), "days")}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
