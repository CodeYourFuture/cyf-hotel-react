import React, { useState } from "react";
import moment from "moment";

import "./App.css";

const SearchResult = props => {
  const [active, setActive] = useState(null);

  const handleClick = index => {
    active === index ? setActive(null) : setActive(index);
  };

  const rows = props.results.map((user, index) => (
    <tr
      key={index}
      onClick={() => handleClick(index)}
      className={active === index ? "background-blue" : "background-white"}
    >
      <th scope="row">{user.id}</th>
      <td>{user.title}</td>
      <td>{user.firstName}</td>
      <td>{user.surname}</td>
      <td>{user.email}</td>
      <td>{user.roomId}</td>
      <td>{user.checkInDate}</td>
      <td>{user.checkOutDate}</td>
      <td>{moment(user.checkOutDate).diff(user.checkInDate, "days")} days</td>
    </tr>
  ));
  return (
    <div class="table-responsive">
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

export default SearchResult;
