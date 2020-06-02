import React, { useState } from "react";
import moment from "moment";

const SearchResults = props => {
  const [rowSelect, setRowSelect] = useState("");

  const changeBackground = data => {
    if (data === rowSelect) {
      setRowSelect();
    } else {
      setRowSelect(data);
    }
  };
  const rows = props.results.map((e, index) => (
    <tr
      className={rowSelect === index ? "btn-false" : "btn-true"}
      onClick={() => changeBackground(index)}
      key={index}
    >
      <th scope="row">{e.id}</th>
      <td>{e.title}</td>
      <td>{e.firstName}</td>
      <td>{e.surname}</td>
      <td>{e.email}</td>
      <td>{e.roomId}</td>
      <td>{e.checkInDate}</td>
      <td>{e.checkOutDate}</td>
      <td>{moment(e.checkOutDate).diff(e.checkInDate, "days")}</td>
    </tr>
  ));

  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">first name</th>
            <th scope="col">surname</th>
            <th scope="col">email</th>
            <th scope="col">room id </th>
            <th scope="col">check in date</th>
            <th scope="col">check out data</th>
            <th scope="col">number of nights</th>
          </tr>
        </thead>

        <tbody className="result">{rows}</tbody>
      </table>
    </div>
  );
};
export default SearchResults;
