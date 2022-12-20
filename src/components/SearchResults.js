import React, { useState } from "react";
import Moment from "moment";

const SearchResult = ({ results, showProfile }) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">firstname</th>
            <th scope="col">surname</th>
            <th scope="col">email</th>
            <th scope="col">room Id</th>
            <th scope="col">checkin </th>
            <th scope="col">check out</th>
            <th scope="col">#night</th>
            <th scope="col">profile</th>
          </tr>
        </thead>
        <tbody>
          {results.map((element, index) => {
            return (
              <TableRow
                key={index}
                element={element}
                showProfile={showProfile}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const TableRow = ({ element, showProfile }) => {
  const [select, setSelect] = useState(true);

  function toggleSelecter() {
    setSelect(select => !select);
  }

  return (
    <tr
      onClick={toggleSelecter}
      style={{ backgroundColor: select ? "" : "lightGrey" }}
    >
      <th scope="row">{element.id}</th>
      <td>{element.title}</td>
      <td>{element.firstName}</td>
      <td>{element.surname}</td>
      <td>{element.email}</td>
      <td>{element.roomId}</td>
      <td>{element.checkInDate}</td>
      <td>{element.checkOutDate}</td>
      <td>{checkDiff(element.checkInDate, element.checkOutDate)}</td>
      <td>
        <button className="table-btn" onClick={() => showProfile(element.id)}>
          show profile
        </button>
      </td>
    </tr>
  );
};
const checkDiff = (InDate, OutDate) => {
  const checkInDate = Moment(InDate, "YYYY-MM-DD");
  const checkOutDate = Moment(OutDate, "YYYY-MM-DD");
  const diff = checkOutDate.diff(checkInDate, "days");
  return diff;
};

export default SearchResult;
