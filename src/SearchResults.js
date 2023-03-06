import React, { useState } from "react";

const SearchResults = (props) => {
    const [active, setActive] = useState(false);

    function tableRowClick() {
      setActive(!active);
    };
  return (
      <tbody>
        <tr onClick={tableRowClick}
          style={{ backgroundColor: active ? "#CBC3E3" : "white" }}>

          <th scope="row">{props.id}</th>
          <td>{props.title}</td>
          <td>{props.firstName}</td>
          <td>{props.surname}</td>
          <td>{props.email}</td>
          <td>{props.roomId}</td>
          <td>{props.checkInDate}</td>
          <td>{props.checkOutDate}</td>
          <td>{props.numberOfNights}</td>
        </tr>
      </tbody>
  );
};

export default SearchResults;
