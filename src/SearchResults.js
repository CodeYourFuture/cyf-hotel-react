import React, { useState } from "react";
import CustomerProfile from "./CustomerProfile";
import moment from "moment";

const SearchResults = ({ results }) => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);

  const handleColourChange = rowId => {
    selectedRows.includes(rowId)
      ? setSelectedRows(selectedRows.filter(el => el !== rowId))
      : setSelectedRows(selectedRows.concat(rowId));
  };

  const handleCustomerID = id => {
    selectedIds.includes(id)
      ? setSelectedIds(selectedIds.filter(el => el !== id))
      : setSelectedIds(selectedIds.concat(id));
  };

  return (
    <div>
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
            <th scope="col">No. of Nights</th>
            <th scope="col"> </th>
            <th scope="col"> </th>
          </tr>
        </thead>
        <tbody>
          {results.map(el => (
            <tr
              key={el.id}
              className={
                selectedRows.includes(el.id) ? "selected" : "unselected"
              }
              onClick={() => {
                handleColourChange(el.id);
              }}
            >
              {Object.values(el).map((item, inx) => (
                <td key={inx}> {item}</td>
              ))}
              <td key={Object.keys(el).length - 1}>
                {moment(el.checkOutDate).diff(moment(el.checkInDate), "days")}
              </td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    handleCustomerID(el.id);
                  }}
                >
                  Show profile
                </button>
              </td>
              <td>
                {selectedIds.includes(el.id) ? (
                  <CustomerProfile selectedIds={el.id} />
                ) : null}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
