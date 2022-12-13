import React, { useState } from "react";
import Moment from "moment";

const SearchResult = props => {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">title</th>
          <th scope="col">firstname</th>
          <th scope="col">surname</th>
          <th scope="col">email</th>
          <th scope="col">room Id</th>
          <th scope="col">checkin date</th>
          <th scope="col">check out date</th>
          <th scope="col">number of night</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((element, index) => {
          return <TableRow key={index} element={element} />;
        })}
      </tbody>
    </table>
  );
};

const TableRow = ({ element }) => {
  const [select, setSelect] = useState(true);

  function toggleSelector() {
    setSelect(select => !select);
  }

  return (
    <tr
      onClick={toggleSelector}
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
    </tr>
  );
};
let checkDiff = (InDate, OutDate) => {
  const checkInDate = Moment(InDate, "YYYY-MM-DD");
  const checkOutDate = Moment(OutDate, "YYYY-MM-DD");
  const diff = checkOutDate.diff(checkInDate, "days");
  return diff;
};

export default SearchResult;
